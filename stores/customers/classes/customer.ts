import { Customer as _Customer } from 'src/client';
import { User } from 'src/stores';

export interface Customer extends _Customer {}

export class Customer extends User implements _Customer {
  constructor(data: _Customer) {
    const { reservations, ...superData } = { ...data };
    super(superData);
    this.reservations = reservations;
  }
}
