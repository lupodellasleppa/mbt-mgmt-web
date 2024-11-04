import { defineStore } from 'pinia';
import type {
  ListAvailableVehiclesApiV1VehiclesAvailableGetData,
  ListStopsApiV1VehiclesStopsByPlatePlateGetData,
  VehicleCreate,
  VehicleUpdate,
} from '../../models';
import {
  createVehicleApiV1VehiclesPost,
  deleteVehicleApiV1VehiclesPlateDelete,
  getVehicleApiV1VehiclesPlateGet,
  listAvailableVehiclesApiV1VehiclesAvailableGet,
  listStopsApiV1VehiclesStopsByPlatePlateGet,
  listVehiclesApiV1VehiclesGet,
  updateVehicleApiV1VehiclesPlatePatch,
} from '../../models';
import { Vehicle } from '.';
import { api } from '../../composables/useApi';

export const useVehicleStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [] as Vehicle[],
    available: [] as Vehicle[],
    newVehicle: new Vehicle({} as Vehicle),
  }),
  actions: {
    getIndex(plate: string) {
      const index = this.vehicles.findIndex(
        (vehicle) => vehicle.plate == plate
      );
      return index;
    },
    retrieve(plate: string) {
      const index = this.getIndex(plate);
      return this.vehicles[index];
    },
    async create(body: VehicleCreate) {
      const data = await this.$call(
        createVehicleApiV1VehiclesPost({ client: api, body })
      );
      return data;
    },
    async get(plate: string) {
      const index = await this.refresh(plate);
      return this.vehicles[index];
    },
    async list() {
      const data = await this.$call(
        listVehiclesApiV1VehiclesGet({ client: api })
      );
      this.vehicles = data.vehicles.map((vehicle) => new Vehicle(vehicle));
    },
    async listAvailable(
      query: ListAvailableVehiclesApiV1VehiclesAvailableGetData['query']
    ) {
      const data = await this.$call(
        listAvailableVehiclesApiV1VehiclesAvailableGet({
          client: api,
          query,
        })
      );
      this.available = data.vehicles.map((vehicle) => new Vehicle(vehicle));
    },
    async listStops(
      plate: string,
      query: ListStopsApiV1VehiclesStopsByPlatePlateGetData['query']
    ) {
      return await this.$call(
        listStopsApiV1VehiclesStopsByPlatePlateGet({
          client: api,
          path: { plate },
          query,
        })
      );
    },
    async refresh(plate: string) {
      const data = await this.$call(
        getVehicleApiV1VehiclesPlateGet({ client: api, path: { plate } })
      );
      const index = this.vehicles.findIndex(
        (vehicle) => vehicle.plate == plate
      );
      this.vehicles[index] = new Vehicle(data);
      return index;
    },
    async patch(plate: string, body: VehicleUpdate) {
      this.$call(
        updateVehicleApiV1VehiclesPlatePatch({
          client: api,
          path: { plate },
          body,
        })
      );
      await this.refresh(plate);
    },
    async delete(plate: string) {
      await this.$call(
        deleteVehicleApiV1VehiclesPlateDelete({ client: api, path: { plate } })
      );
    },
  },
});
