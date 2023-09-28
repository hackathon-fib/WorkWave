import type { AxiosResponse } from 'axios';

import { client } from './axios/client';
import { HTTP_STATUS } from '@/helpers/enums';

export interface ApiResponse<T = any> extends AxiosResponse<T> {
  error?: boolean;
}

export default async function apiCall<T = any>(
  method: string,
  url: string,
  data: Record<string, any> = {},
  addAuth = false,
  config: Record<string, any> = {},
  genericErrorModal = true
): Promise<ApiResponse<T>> {
  method = method.toUpperCase();

  const userStore = useUserStore();

  try {
    let response: ApiResponse<T> | { status: number };

    config.headers = {
      ...config.headers,
      Accept: 'application/json'
    };

    if (addAuth) {
      config.headers.Authorization = userStore.merchantToken
        ? `Bearer ${userStore.merchantToken}`
        : `Bearer ${userStore.token}`;
    }

    if (method === HTTP_STATUS.GET) {
      response = await client.get(url, config);
    } else if (method === HTTP_STATUS.POST) {
      response = await client.post(url, data, config);
    } else if (method === HTTP_STATUS.PUT) {
      response = await client.put(url, data, config);
    } else if (method === HTTP_STATUS.DELETE) {
      response = await client.delete(url, config);
    } else {
      response = { status: 0 };
    }

    // Throw an exception if the response status code isn't in the 2xx range
    if (!(response?.status >= 200 && response?.status <= 299)) {
      // Ensure all errors in the catch() have a 'response' property, consistent with axios-emitted errors
      let err = { response: {} };
      err = { ...new Error(), response: {} };
      err.response = response;
      throw err;
    }

    return response as ApiResponse<T>;
  } catch (err: any) {
    const appStore = useAppStore();
    const response: ApiResponse<T> = err?.response || {};

    if (response.status == 401) {
      appStore.showLoadingModal = false;
      userStore.resetState();
    } else if (genericErrorModal && err?.message !== 'canceled') {
      appStore.errorModal = {
        showing: true,
        message: (response?.data as any)?.message || 'There was an error, please try again or contact a system administrator.'
      };
    }

    response.error = true;

    return response;
  }
}
