import { first } from 'radash';
import {
  TourDay as TourDayType,
  TourDayWithoutReservation as TourDayWithoutReservationType,
} from 'src/client';
import { Tour, ReservationWithParticipants } from '.';
import { useDateTimeStore } from 'src/stores/datetime';

interface Colors {
  card: string;
  content: string;
  lightText: string;
  header: string;
}

export interface TourDayWithoutReservation
  extends TourDayWithoutReservationType {}

export class TourDayWithoutReservation
  implements TourDayWithoutReservationType
{
  tours: Tour[] = []; // override tours property with class instead of type
  constructor(data: TourDayWithoutReservationType) {
    const dateTimeStore = useDateTimeStore();
    const defaultTours = [] as Tour[];
    this.tour_date = data.tour_date
      ? data.tour_date
      : dateTimeStore.viewDay.ita;
    this.id = data.id;
    this.tours = data.tours
      ? data.tours.map((tour) => new Tour(tour))
      : defaultTours;
    this.previous_day_id = data.previous_day_id ? data.previous_day_id : null;
    this.next_day_id = data.next_day_id ? data.next_day_id : null;
  }
}

export interface TourDay extends TourDayType {}

export class TourDay extends TourDayWithoutReservation implements TourDayType {
  tours: Tour[] = []; // override tours property with class instead of type
  constructor(data: TourDayType) {
    const { reservation, ...superData } = { ...data };
    super(superData);
    this.reservation = new ReservationWithParticipants(reservation);
  }

  expanded?: boolean = false;
  loading?: boolean = false;

  get startTime(): string | null {
    const firstTour = first(this.tours);
    return firstTour ? firstTour.start_time : null;
  }
  get endTime(): string | null {
    const firstTour = first(this.tours);
    return firstTour ? firstTour.end_time : null;
  }

  get isBigGroup(): boolean {
    return this.reservation && this.reservation.participants.length > 7;
  }

  get isFromAgent(): boolean {
    return this.reservation && this.reservation.tour_agent != null;
  }

  get colors(): Colors {
    let color: Colors;
    switch (true) {
      case this.isBigGroup:
        color = {
          card: 'purple-10',
          content: 'deep-purple-6',
          lightText: 'purple-4',
          header: 'purple-6',
        };
      case this.isFromAgent:
        color = {
          card: 'light-blue-10',
          content: 'light-blue-9',
          lightText: 'light-blue-4',
          header: 'blue-7',
        };
      // case this.payment_is_cash:
      //   key = 'issue';
      //   break;
      default:
        color = {
          card: 'indigo-9',
          content: 'indigo-7',
          lightText: 'indigo-2',
          header: 'indigo-5',
        };
    }
    return color;
  }

  get allToursExpanded() {
    const toursExpanded = this.tours.map((tour) => tour.expanded);
    return toursExpanded.some((expanded) => expanded);
  }

  setToursExpanded(value: boolean): void {
    this.tours.forEach((tour) => tour.setExpanded(value));
  }
}