import { Vehicle as VehicleType } from 'src/client';

export interface Vehicle extends VehicleType {}

export class Vehicle implements VehicleType {
  constructor(data: VehicleType) {
    this.type = data.type;
    this.brand = data.brand;
    this.model = data.model;
    this.seats = data.seats ? data.seats : 1;
    this.picture = data.picture;
    this.active = data.active;
    this.name = data.name;
    this.plate = data.plate;
    this.battery = data.battery;
    this.tours = data.tours;
    this.stops = data.stops;
  }

  get licensePlateFormatted() {
    const plate = this.plate;
    return {
      ita: [
        plate.substring(0, 2),
        plate.substring(2, 5),
        plate.substring(5, 7),
      ].join(' '),
    };
  }
}
