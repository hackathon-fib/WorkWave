import { defineStore, getActivePinia } from 'pinia';
import apiCall from '../api'

type UserState = {
  accessToken: String,
  loading: Boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    accessToken: '',
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

      this.loading = false;
    },
    async resetState() {
      this.loading = false;
      this.accessToken = '';
    }
  }
});