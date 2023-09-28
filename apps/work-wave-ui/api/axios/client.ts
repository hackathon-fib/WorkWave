import axios, { isAxiosError } from 'axios';

import { ROUTE_NAME } from '../../helpers/const';
import router from '../../router';
import { useUserStore } from '../../store/user';

// Mantle API specific functionality

const client = axios.create();
client.defaults.baseURL = import.meta.env.VITE_MANTLE_API_URL;

const onError = async (error: unknown): Promise<unknown> => {
  if (isAxiosError(error)) {
    // If we've become de-authenticated, then redirect to login immediately, and don't bother with
    // anything else.
    if ([401].includes(error.response?.status || -1)) {
      await useUserStore().logout(false);

      if (!router.currentRoute.value.meta.noRedirectOnAuthError) {
        await router.push({ name: ROUTE_NAME.LOGIN });
      }

      // Ensure that no error message box is shown in this scenario.
      if (error.config?.options) {
        error.config.options.withErrorMessageBox = false;
      }
    }
  }

  return Promise.reject(error);
};

client.interceptors.request.use(config => {
  // Add the Mantle API auth token by default
  if (config.options?.withAccessToken ?? true) {
    const userStore = useUserStore();
    config.headers['x-mantle-auth-token'] = userStore.loggedInUser?.tokens[0]?.token;
  }

  return config;
}, onError);

client.interceptors.response.use(response => response, onError);

export { client };