import axios, { AxiosInstance } from 'axios';
import { navigateTo } from 'nuxt/app';

const client: AxiosInstance = axios.create();

client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error?.response?.status === 404) {
      await navigateTo('/404');
    }

    return Promise.reject(error);
  }
);

// Set the apiUrl to be the apiUrl from the set localStorage config or to the envVariable url
const apiUrl: string = process.env.API_URL || 'https://work-wave-api.onrender.com/';

client.defaults.baseURL = apiUrl;

export { client };