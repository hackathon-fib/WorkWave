import axios, { AxiosInstance } from 'axios';
import router from '@/router';

const client: AxiosInstance = axios.create();

client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error?.response?.status === 404) {
      await router.push('/404');
    }

    return Promise.reject(error);
  }
);

// Set the apiUrl to be the apiUrl from the set localStorage config or to the envVariable url
const apiUrl: string = process.env.API_URL || 'https://api.workwave-onrender.com/';

client.defaults.baseURL = apiUrl;

export { client };