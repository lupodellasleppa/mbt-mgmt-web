import {
  Service as _Service,
  ServiceWithoutServiceType as _ServiceWithoutServiceType,
} from 'src/client';
import { ServiceTypeWithoutServices } from '.';

export interface ServiceWithoutServiceType
  extends _ServiceWithoutServiceType {}

export class ServiceWithoutServiceType implements _ServiceWithoutServiceType {
  constructor(data: _ServiceWithoutServiceType) {
    this.code = data.code;
    this.name = data.name;
    this.description = data.description;
    this.duration = data.duration ? data.duration : 1;
    this.preferred_am_start_time = data.preferred_am_start_time
      ? data.preferred_am_start_time
      : '09:30';
    this.preferred_pm_start_time = data.preferred_pm_start_time
      ? data.preferred_pm_start_time
      : '14:30';
    this.id = data.id;
    this.active = data.active;
  }
}

export interface Service extends _Service {}

export class Service extends ServiceWithoutServiceType implements _Service {
  constructor(data: _Service) {
    const { service_type, ...superData } = { ...data };
    super(superData);
    this.service_type = service_type
      ? new ServiceTypeWithoutServices(service_type)
      : new ServiceTypeWithoutServices({} as ServiceTypeWithoutServices);
  }
}
