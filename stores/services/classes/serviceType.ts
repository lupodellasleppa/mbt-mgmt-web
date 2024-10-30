import {
  ServiceType as _ServiceType,
  ServiceTypeWithoutServices as _ServiceTypeWithoutServices,
  ServiceWithoutServiceType as _ServiceWithoutServiceType,
} from 'src/client';
import { ServiceWithoutServiceType } from '.';

export interface ServiceTypeWithoutServices
  extends _ServiceTypeWithoutServices {}

export class ServiceTypeWithoutServices
  implements _ServiceTypeWithoutServices
{
  constructor(data: _ServiceTypeWithoutServices) {
    this.name = data.name;
    this.description = data.description;
    this.id = data.id;
  }
}

export interface ServiceType extends _ServiceType {}

export class ServiceType
  extends ServiceTypeWithoutServices
  implements _ServiceType
{
  constructor(data: _ServiceType) {
    const { services, ...superData } = { ...data };
    super(superData);
    this.services = services
      ? services.map((service) => new ServiceWithoutServiceType(service))
      : [new ServiceWithoutServiceType({} as _ServiceWithoutServiceType)];
  }
}
