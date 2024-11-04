import type { TourAgent as _TourAgent } from '../../../models';
import { User } from '../..';

export interface TourAgent extends _TourAgent {}

export class TourAgent extends User implements _TourAgent {
  constructor(data: _TourAgent) {
    const { tour_agency, ...superData } = { ...data };
    super(superData);
    this.tour_agency = tour_agency;
  }
}
