import { Employee, Tour as TourType, VehicleORM } from 'src/client';

export interface Tour extends TourType {}

export class Tour implements TourType {
  expanded?: boolean = false;

  constructor(data: TourType) {
    this.id = data.id;
    this.start_time = data.start_time;
    this.end_time = data.end_time;
    this.pickup = data.pickup;
    this.dropoff = data.dropoff;
    this.service = data.service;
    this.vehicles = data.vehicles;
    this.drivers = data.drivers;
  }

  setExpanded(value: boolean): void {
    this.expanded = value;
  }

  removedVehicles: Set<VehicleORM> = new Set();
  removedAssignees: Set<Employee> = new Set();
}
