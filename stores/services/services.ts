import { defineStore } from 'pinia';
import type {
  Service as _Service,
  ServiceType as _ServiceType,
  ServiceUpdate,
  ServiceTypeUpdate,
  ServiceTypeCreate,
  ServiceCreate,
} from '../../models';
import {
  listServicesApiV1ServicesGet,
  getServiceByIdApiV1ServicesServiceIdGet,
  updateServiceApiV1ServicesServiceIdPatch,
  deleteServiceApiV1ServicesServiceIdDelete,
  getServiceTypeByIdApiV1ServicesTypesServiceTypeIdGet,
  listServiceTypesApiV1ServicesTypesGet,
  updateServiceTypeApiV1ServicesTypesServiceTypeIdPatch,
  deleteServiceTypeApiV1ServicesTypesServiceTypeIdDelete,
  createServiceTypeApiV1ServicesTypesPost,
  createServiceApiV1ServicesPost,
} from '../../models';
import { Service, ServiceType } from '.';
import { api } from '../../composables/useApi';

export const useServiceTypeStore = defineStore('service-type', {
  state: () => ({
    serviceTypes: [] as _ServiceType[],
    newServiceType: new ServiceType({} as _ServiceType),
  }),
  actions: {
    async create() {
      const body: ServiceTypeCreate = this.newServiceType;
      await this.$call(
        createServiceTypeApiV1ServicesTypesPost({ client: api, body })
      );
    },
    getIndex(service_type_id: number) {
      return this.serviceTypes.findIndex(
        (serviceType) => serviceType.id == service_type_id
      );
    },
    retrieve(service_type_id: number) {
      const index = this.getIndex(service_type_id);
      return this.serviceTypes[index];
    },
    async get(service_type_id: number) {
      const index = await this.refresh(service_type_id);
      return this.serviceTypes[index];
    },
    async list() {
      const data = await this.$call(
        listServiceTypesApiV1ServicesTypesGet({ client: api })
      );
      this.serviceTypes = data.service_types;
    },
    async refresh(service_type_id: number) {
      const data = await this.$call(
        getServiceTypeByIdApiV1ServicesTypesServiceTypeIdGet({
          client: api,
          path: { service_type_id },
        })
      );
      const index = this.getIndex(service_type_id);
      this.serviceTypes[index] = new ServiceType(data);
      return index;
    },
    async patch(service_type_id: number, body: ServiceTypeUpdate) {
      await this.$call(
        updateServiceTypeApiV1ServicesTypesServiceTypeIdPatch({
          client: api,
          path: { service_type_id },
          body,
        })
      );
      await this.refresh(service_type_id);
    },
    async delete(service_type_id: number) {
      await this.$call(
        deleteServiceTypeApiV1ServicesTypesServiceTypeIdDelete({
          client: api,
          path: { service_type_id },
        })
      );
    },
  },
});

export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [] as _Service[],
    newService: new Service({} as _Service),
  }),
  actions: {
    async create() {
      const { id: service_type_id } = this.newService.service_type;
      const body: ServiceCreate = { ...this.newService, service_type_id };
      await this.$call(createServiceApiV1ServicesPost({ client: api, body }));
    },
    getIndex(service_id: number) {
      return this.services.findIndex((service) => service.id == service_id);
    },
    retrieve(service_id: number) {
      const index = this.getIndex(service_id);
      return this.services[index];
    },
    async get(service_id: number) {
      const index = await this.refresh(service_id);
      return this.services[index];
    },
    async list() {
      const data = await this.$call(
        listServicesApiV1ServicesGet({ client: api })
      );
      this.services = data.services.map((service) => new Service(service));
    },
    async refresh(service_id: number) {
      const data = await this.$call(
        getServiceByIdApiV1ServicesServiceIdGet({
          client: api,
          path: { service_id },
        })
      );
      const index = this.getIndex(service_id);
      this.services[index] = new Service(data);

      return index;
    },
    async patch(service_id: number, body: ServiceUpdate) {
      await this.$call(
        updateServiceApiV1ServicesServiceIdPatch({
          client: api,
          path: { service_id },
          body,
        })
      );
      await this.refresh(service_id);
    },
    async toggleActive(service_id: number, value: boolean) {
      const { active, ...service } = await this.get(service_id);
      await this.$call(
        updateServiceApiV1ServicesServiceIdPatch({
          client: api,
          path: { service_id },
          body: { active: value, ...service },
        })
      );
      await this.refresh(service_id);
    },
    async delete(service_id: number) {
      await this.$call(
        deleteServiceApiV1ServicesServiceIdDelete({
          client: api,
          path: { service_id },
        })
      );
    },
  },
});
