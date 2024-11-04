import type { Employee, Tour as _Tour, VehicleORM } from '../../../models';

export interface Tour extends _Tour {}

export class Tour implements _Tour {
  expanded?: boolean = false;

  constructor(data: _Tour) {
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
