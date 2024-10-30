import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { api, main } from 'src/boot/axios';
import {
  DriverCreate,
  DriverStopCreate,
  DriverStopTypeEnum,
  DriverStopUpdate,
  DriverUpdate,
  Employee,
} from 'src/client';

const endpoint = '/drivers';

export const useDriversStore = defineStore('drivers', {
  state: () => ({
    drivers: [] as Employee[],
    availableDrivers: [] as Employee[],
    loading: false,
  }),
  actions: {
    async create(driver: DriverCreate) {
      try {
        return (await api.post(endpoint, { ...driver, role: undefined })).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async listDrivers(active = true) {
      this.loading = true;
      try {
        this.drivers = (
          await api.get(endpoint, { params: { active } })
        ).data.drivers;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async searchDrivers(q: string) {
      this.loading = true;
      try {
        this.drivers = (
          await api.get(`${endpoint}/search`, { params: { q } })
        ).data.drivers;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async getDriver(driverId: number) {
      try {
        return (await api.get(`${endpoint}/${driverId}`)).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getAvailableDrivers(
      start: string,
      end: string,
      tour_date: string,
      language_code: string
    ) {
      try {
        this.loading = true;
        this.availableDrivers = (
          await api.get(`${endpoint}/available`, {
            params: { start, end, tour_date, language_code },
          })
        ).data.drivers;
      } catch (error) {
        Notify.create(error as string);
      } finally {
        this.loading = false;
      }
    },
    async update(data: DriverUpdate) {
      const { id: driverId, ...updateData } = { ...data };
      try {
        return (await api.patch(`${endpoint}/${driverId}`, updateData)).data;
      } catch (error) {
        Notify.create(error as string);
        throw error;
      }
    },
    async delete(driverId: number) {
      try {
        await api.delete(`${endpoint}/${driverId}`);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    // stops
    async listStops({
      driverId,
      start_datetime_from = null,
      start_datetime_to = null,
      end_datetime_from = null,
      end_datetime_to = null,
      limit = null,
      filters = [],
    }: {
      driverId: number;
      start_datetime_from?: Date | null;
      start_datetime_to?: Date | null;
      end_datetime_from?: Date | null;
      end_datetime_to?: Date | null;
      limit?: number | null;
      filters?: DriverStopTypeEnum[];
    }) {
      try {
        return await api.get(`/drivers/stops/by-driver/${driverId}`, {
          params: {
            start_datetime_from,
            start_datetime_to,
            end_datetime_from,
            end_datetime_to,
            limit,
            filters,
          },
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async listPastStops(driverId: number) {
      return (await this.listStops({ driverId, end_datetime_to: new Date() }))
        .data;
    },
    async listCurrentStops(driverId: number) {
      return (
        await this.listStops({
          driverId,
          start_datetime_to: new Date(),
          end_datetime_from: new Date(),
        })
      ).data;
    },
    async listNextStops(driverId: number) {
      return (
        await this.listStops({
          driverId,
          start_datetime_from: new Date(),
        })
      ).data;
    },
    async createStop(data: DriverStopCreate) {
      try {
        return (await api.post(`${endpoint}/stops`, data)).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getStop(stopId: number) {
      try {
        return (await api.get(`${endpoint}/stops/${stopId}`)).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updateStop(data: DriverStopUpdate) {
      const { id, ...updateData } = { ...data };
      console.log('EP', updateData.start_datetime);
      try {
        return await api.patch(`${endpoint}/stops/${id}`, updateData);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteStop(stopId: number) {
      try {
        await api.delete(`${endpoint}/stops/${stopId}`);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async listLanguages() {
      try {
        return (await main.get('/languages')).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getLanguage(languageCode: string) {
      try {
        return (await main.get(`/languages/by-code/${languageCode}`)).data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
