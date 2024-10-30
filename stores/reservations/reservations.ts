import { defineStore } from 'pinia';
import { useDateTimeStore } from '../datetime';
import {
  getCountByFilterApiV1ReservationsCountByFilterGet,
  getMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGet,
  getReservationsByDateApiV1ReservationsByDateTourDateGet,
  getTourDayApiV1ReservationsTourDaysTourDayIdGet,
  ListReservationFiltersEnum,
  lockTourDayApiV1ReservationsTourDaysLockTourDayIdPatch,
  Reservation as ReservationType,
  Tour as TourType,
  TourDay as TourDayType,
  TourDaysCountByFilterSchema,
  updateTourDayApiV1ReservationsTourDaysTourDayIdPatch,
  createReservationApiV1ReservationsPost,
  cancelApiV1ReservationsTourDaysCancelTourDayIdPatch,
  getReservationApiV1ReservationsReservationIdGet,
  TourDayWithoutReservation,
  Customer,
} from 'src/client';
import { api } from 'src/boot/axios';
import { TourDay, Reservation } from '.';
import { date } from 'quasar';
import { ListReservationFiltersMap } from 'src/client/additionalTypes';
import { isEmpty } from 'radash';
import { computed, ref } from 'vue';

// export const useToursStore = defineStore('tours', {
//   state: () => ({
//     tours: [] as Tour[]
//   }),
//   actions: {
//     refresh(tourId: number) {
//       this.$call(getTour)
//     }
//   }
// })

export const useTourDaysStore = defineStore('tour-days', {
  state: () => ({
    tourDays: [] as TourDay[],
    counts: {
      valid: 0,
      canceled: 0,
      completed: 0,
      incomplete: 0,
    } as TourDaysCountByFilterSchema,
    filters: {
      valid: true,
      canceled: false,
      completed: false,
      incomplete: false,
    } as ListReservationFiltersMap,
  }),
  getters: {
    allDaysExpanded(state) {
      const daysExpanded = state.tourDays.map(
        (dayStore) => dayStore.allToursExpanded
      );
      return daysExpanded.some((expanded) => expanded);
    },
    tourDayTimes(state) {
      const dateTimeStore = useDateTimeStore();
      const result = [];
      const times = new Set(
        state.tourDays
          .map((day) => {
            if (day.startTime) {
              return dateTimeStore.format(
                day.startTime,
                dateTimeStore.formats.time.hhmmsstz,
                dateTimeStore.formats.time.hh
              );
            } else {
              return 'xx';
            }
          })
          .sort()
      );
      for (const time of times) {
        result.push(time + ':00');
      }
      return result;
    },
    appliedFilters(state) {
      const defaultFilters: ListReservationFiltersEnum[] = ['valid'];
      const appliedFilters: ListReservationFiltersEnum[] = Object.keys(
        state.filters
      ).filter(
        (key) => state.filters[key as keyof ListReservationFiltersMap]
      ) as ListReservationFiltersEnum[];
      return !isEmpty(appliedFilters) ? appliedFilters : defaultFilters;
    },
  },
  actions: {
    setDays(data: TourDayType[]) {
      this.tourDays = data.map((tourDay) => new TourDay(tourDay));
    },
    setDaysExpanded(value: boolean) {
      this.tourDays.forEach((day) => day.setToursExpanded(value));
    },
    async get(tourDayId: number) {
      const tourDayIndex = await this.refresh(tourDayId);
      return this.tourDays[tourDayIndex];
    },
    async getMultipleTours(tourDayId: number) {
      const data = await this.$call(
        getMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGet({
          client: api,
          path: { tour_day_id: tourDayId },
        })
      );
      const tourDays = data.tour_days;

      return tourDays.map((tourDay) => new TourDay(tourDay));
    },
    async count(tourDate: string) {
      const data = await this.$call(
        getCountByFilterApiV1ReservationsCountByFilterGet({
          client: api,
          query: { tour_date: tourDate },
        })
      );
      this.counts.valid = data.valid;
      this.counts.canceled = data.canceled;
      this.counts.incomplete = data.incomplete;
      this.counts.completed = data.completed;
    },
    async list() {
      const dateTimeStore = useDateTimeStore();
      const data = await this.$call(
        getReservationsByDateApiV1ReservationsByDateTourDateGet({
          client: api,
          path: { tour_date: dateTimeStore.viewDay.iso },
          query: { filters: this.appliedFilters },
        })
      );
      this.setDays(data.tour_days);
    },
    async patch(tourDayId: number, body: TourDay) {
      await this.$call(
        updateTourDayApiV1ReservationsTourDaysTourDayIdPatch({
          client: api,
          path: { tour_day_id: tourDayId },
          body,
        })
      );
      await this.refresh(tourDayId);
    },
    async lock(tourDayId: number, value: boolean): Promise<void> {
      await this.$call(
        lockTourDayApiV1ReservationsTourDaysLockTourDayIdPatch({
          client: api,
          path: { tour_day_id: tourDayId },
          query: { value },
        })
      );
      await this.refresh(tourDayId);
    },
    async cancel(tourDayId: number) {
      await this.$call(
        cancelApiV1ReservationsTourDaysCancelTourDayIdPatch({
          client: api,
          path: { tour_day_id: tourDayId },
        })
      );
      await this.refresh(tourDayId);
    },
    async refresh(tourDayId: number) {
      const data = await this.$call(
        getTourDayApiV1ReservationsTourDaysTourDayIdGet({
          client: api,
          path: { tour_day_id: tourDayId },
        })
      );
      const tourDayIndex = this.tourDays.findIndex(
        (day) => day.id == tourDayId
      );
      this.tourDays[tourDayIndex] = new TourDay(data);
      return tourDayIndex;
    },
  },
  persist: { pick: ['filters'] },
});

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: [] as Reservation[],
    newReservation: new Reservation({} as ReservationType),
    newReservationDialog: false,
  }),
  actions: {
    async create() {
      const dateTimeStore = useDateTimeStore();
      const tourYear = date
        .extractDate(
          this.newReservation.tour_days[0].tour_date,
          dateTimeStore.formats.date.ita
        )
        .getFullYear();
      const body = {
        ...this.newReservation,
        year: tourYear,
        tour_days: this.newReservation.tour_days.map((day) => {
          return {
            ...day,
            tour_date: dateTimeStore.format(
              day.tour_date,
              dateTimeStore.formats.date.ita,
              dateTimeStore.formats.date.iso
            ),
            tours: day.tours.map((tour) => {
              return {
                ...tour,
                end_time: dateTimeStore.format(
                  tour.end_time,
                  dateTimeStore.formats.time.hhmm,
                  dateTimeStore.formats.time.hhmmsstz
                ),
                start_time: dateTimeStore.format(
                  tour.start_time,
                  dateTimeStore.formats.time.hhmm,
                  dateTimeStore.formats.time.hhmmsstz
                ),
                service_id: tour.service.id,
              };
            }),
          };
        }),
      };
      await this.$call(
        createReservationApiV1ReservationsPost({ client: api, body })
      );
    },
    async get(reservationId: number) {
      const reservationIndex = await this.refresh(reservationId);
      return this.reservations[reservationIndex];
    },
    // async list(filters: ListReservationFiltersEnum[] = []) {
    //   const dateTimeStore = useDateTimeStore();
    //   const tourDaysStore = useTourDaysStore();
    //   const data = await this.$call(
    //     getReservationsByDateApiV1ReservationsByDateTourDateGet({
    //       client: api,
    //       path: { tour_date: dateTimeStore.viewDay.iso },
    //       query: { filters },
    //     })
    //   );
    //   tourDaysStore.setDays(data.tour_days);
    // },
    async count(tourDate: string) {
      const data = await this.$call(
        getCountByFilterApiV1ReservationsCountByFilterGet({
          client: api,
          query: { tour_date: tourDate },
        })
      );
      return data;
    },
    // async getByBookingNumber(bookingNumber: string) {
    //   const data = await this.$call(getref)
    //   try {
    //     this.reservations = [
    //       (await api.get(`${endpoint}/ref/${bookingNumber}`)).data,
    //     ];
    //   } catch (error) {
    //     if (isAxiosError(error)) {
    //       catch500(error);
    //       if (error.status === 404) {
    //         reservations.value = [];
    //       }
    //     }
    //     throw error;
    //   }
    // };
    async refresh(reservationId: number) {
      const data = await this.$call(
        getReservationApiV1ReservationsReservationIdGet({
          client: api,
          path: { reservation_id: reservationId },
        })
      );
      const reservationIndex = this.reservations.findIndex(
        (reservation) => reservation.id == reservationId
      );
      this.reservations[reservationIndex] = new Reservation(data);
      return reservationIndex;
    },
  },
});

export const useReservationsToolbarStore = defineStore(
  'reservations-toolbar',
  {
    state: () => ({
      search: null,
      showSearch: false,
      showFilters: false,
    }),
    actions: {
      setShowSearch(value: boolean) {
        this.showFilters = false;
        this.showSearch = value;
      },
      setShowFilters(value: boolean) {
        this.showSearch = false;
        this.showFilters = value;
      },
    },
  }
);
