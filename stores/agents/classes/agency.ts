import type { TourAgency as _TourAgency } from '../../../models';

export interface TourAgency extends _TourAgency {}

export class TourAgency implements _TourAgency {
  constructor(data: _TourAgency) {
    this.name = data.name;
    this.active = data.active;
    this.id = data.id;
  }
}
