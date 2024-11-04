import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import type { Store } from 'pinia';
import { ref, type Ref } from 'vue';
import { isAxiosError, type AxiosError } from 'axios';
import { Notify } from 'quasar';

type ApiCall = <T>(
  call: Promise<{ data: T; error: any }>
) => Promise<NonNullable<T>>;
/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    set loading(value: boolean | Ref<boolean>);
    get loading(): boolean;
    $call: ApiCall;
  }
}

export type PiniaStore<T extends (...args: any) => any> = Omit<
  ReturnType<T>,
  keyof ReturnType<typeof defineStore>
>;

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const pinia = createPinia();

// You can add Pinia plugins here
pinia.use(piniaPluginPersistedstate);
pinia.use(() => ({ loading: ref(false) }));
pinia.use(({ store }) => ({
  $call: async <T>(call: Promise<{ data: T; error: any }>) =>
    await callEndpoint(call, store),
}));

export const catch400 = (error: AxiosError) => {
  if (error.status == 400) {
    Notify.create({
      message: error.message,
      position: 'bottom',
      color: 'negative',
      timeout: 2500,
    });
    throw error;
  }
};
export const catch500 = (error: AxiosError) => {
  if (error.code == 'ERR_NETWORK') {
    Notify.create({
      message: error.message,
      position: 'bottom',
      color: 'negative',
      timeout: 2500,
    });
    throw error;
  }
};

export const callEndpoint = async <T>(
  call: Promise<{ data: T; error: any }>,
  store: Store
) => {
  store.loading = true;
  const { data, error } = await call;
  store.loading = false;
  if (!data || error) {
    if (isAxiosError(error)) {
      catch400(error);
      catch500(error);
    }
    throw error;
  }
  return data;
};

export * from './users';
export * from './agents';
export * from './customers';
export * from './reservations';
export * from './services';
export * from './vehicles';
export * from './datetime';
