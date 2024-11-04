import { client, PermissionsEnum } from '../models';
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { isAxiosError } from 'axios';
import { useUserStore } from '../stores';

client.setConfig({ baseURL: process.env.API_BASE_URL });
const api = client;

api.instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError | Error) => {
    const $router = useRouter();
    const userStore = useUserStore();
    if (isAxiosError(error)) {
      let oldRequest;
      switch (error.status) {
        case 400:
          console.error(error.status, error.message);
          break;

        case 401:
          console.error(error.status, error.message);
          if (userStore.refreshToken && (oldRequest = error.config)) {
            delete error.config.headers['Authorization'];
            userStore.getRefreshToken().then(() => {
              api.request(oldRequest);
            });
            console.log('refresh tokennnnn');
          }
          localStorage.removeItem('token');
          localStorage.removeItem('currentUser');
          userStore.$reset();
          $router.push('/login');
          break;

        case 403:
          // $router.back();
          $router.push({
            name: 'accessRequest',
            query: {
              permission: PermissionsEnum.RESERVATION_VIEW,
              prev: $router.currentRoute.value.path,
            },
          });
          break;

        default:
          console.error(error.status, error.message);
      }

      return Promise.reject(error);
    }
  }
);

api.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = userStore.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export { api };
