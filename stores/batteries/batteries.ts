import { defineStore } from 'pinia';
import { ref } from 'vue';
import { endpoint } from '.';
import { isAxiosError } from 'axios';
import { catch500 } from '..';
import type { Battery } from '../../models';

export const useBatteriesStore = defineStore('batteries',  {
  state : () => ({
    batteris: ref([] as Battery[])
  })
  actions: {
    async list() {
      const data = this.$call(batteries)
    }
  }

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
};
