import {
  ReservationWithParticipants as _ReservationWithParticipants,
  Reservation as _Reservation,
  TourDayWithoutReservation as TourDayWithoutReservationType,
  CurrencyEnum,
  TourAgency,
} from 'src/client';
import { TourDayWithoutReservation } from './tourDay';
import { first, last } from 'radash';
import { date } from 'quasar';
import { useDateTimeStore } from 'src/stores/datetime';
import { TourAgent } from 'src/stores/agents';
import { Customer } from 'src/stores';

export interface ReservationWithParticipants
  extends _ReservationWithParticipants {}

export class ReservationWithParticipants
  implements _ReservationWithParticipants
{
  constructor(data: _ReservationWithParticipants) {
    const defaultParticipants = [new Customer({} as Customer)];
    this.language = data.language
      ? data.language
      : { name: 'english', code: 'gb' };
    this.id = data.id;
    this.booking_number = data.booking_number;
    this.booking_serial = data.booking_serial;
    this.year = data.year;
    this.tour_agent = data.tour_agent
      ? data.tour_agent
      : new TourAgent({
          nickname: 'No Agent',
          tour_agency: { name: 'MBT' } as TourAgency,
        } as TourAgent);
    this.created = data.created;
    this.updated = data.updated;
    this.participants = data.participants
      ? data.participants
      : defaultParticipants;
    this.price_value = data.price_value;
    this.price_currency = data.price_currency
      ? data.price_currency
      : CurrencyEnum.EUR;
    this.payment_info = data.payment_info;
    this.note = data.note ? data.note : null;
    this.paid = data.paid ? data.paid : false;
    this.locked = data.locked ? data.locked : false;
    this.canceled = data.canceled ? data.canceled : false;
  }
  get name(): string {
    const firstParticipant = first(this.participants);

    return firstParticipant?.fullName || '';
  }
}

export interface Reservation extends _Reservation {}

export class Reservation
  extends ReservationWithParticipants
  implements _Reservation
{
  constructor(data: _Reservation) {
    const { tour_days, ...superData } = { ...data };
    super(superData);
    this.tour_days = tour_days
      ? tour_days
      : [new TourDayWithoutReservation({} as TourDayWithoutReservationType)];
  }

  addDay() {
    const dateTimeStore = useDateTimeStore();
    const newDay = new TourDayWithoutReservation(
      {} as TourDayWithoutReservationType
    );
    const lastDay = last(this.tour_days)?.tour_date;
    const extractedLastDay = date.extractDate(
      lastDay || dateTimeStore.viewDay.iso,
      dateTimeStore.formats.date.ita
    );
    const newDate = date.addToDate(extractedLastDay, { day: 1 });
    newDay.tour_date = date.formatDate(
      newDate,
      dateTimeStore.formats.date.ita
    );
    this.tour_days.push(newDay);
  }

  removeDay(idx: number) {
    this.tour_days.splice(idx, 1);
  }
}
