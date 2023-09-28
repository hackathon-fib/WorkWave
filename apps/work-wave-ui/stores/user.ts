import { defineStore, getActivePinia } from 'pinia';
import apiCall from '../api'

type UserState = {
  accessToken: String,
  id: String,
  username: String,
  loading: Boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    accessToken: '',
    id: '',
    username: '',
    loading: false
  }),
  getters: {},
  actions: {
    async login(username: String, password: String) {
      this.loading = true;

      const res = await apiCall.auth.post.login({username, password});

      if (!res) {
        //blow up here
      }

      const cookie = useCookie('userAccess');
      cookie.value = res.data.accessToken;

      this.accessToken = res.data.accessToken;
      this.id = res.data.id;
      this.username = res.data.username;

      navigateTo('dashboard');
      this.loading = false;
    },
    async resetState() {
      this.loading = false;
      this.accessToken = '';
    },
    logout() {
      this.accessToken = '';
      const userAccessCookie = useCookie('userAccess');
      userAccessCookie.value = '';

      navigateTo('login');
    }
  },
  persist: true
});