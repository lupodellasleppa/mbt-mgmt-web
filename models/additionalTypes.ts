export enum RoleValuesEnum {
  BASE = 100,
  CUSTOMER = 50,
  TOUR_AGENT = 40,
  ASSIGNEE = 30,
  BOOKING_OFFICER = 20,
  MGMT = 10,
  ADMIN = 0,
}

export interface UserDetail {
  name: string | null;
  value: string | null;
}

export interface ListReservationFiltersMap {
  valid: boolean;
  canceled: boolean;
  completed: boolean;
  incomplete: boolean;
}
