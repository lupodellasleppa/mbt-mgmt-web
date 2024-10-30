import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Battery } from 'src/client';
import { ref } from 'vue';
import { endpoint } from '.';
import { isAxiosError } from 'axios';
import { catch500 } from '..';

export const useBatteriesStore = defineStore('batteries', () => {
  const batteries = ref<Battery[]>([] as Battery[]);

  const list = async () => {
    try {
      batteries.value = (await api.get(endpoint)).data;
      return batteries.value;
    } catch (error) {
      if (isAxiosError(error)) {
        catch500(error);
      }
      throw error;
    }
  };

  return {
    batteries,

    list,

    $reset: () => {
      batteries.value = [];
    },
  };
});
