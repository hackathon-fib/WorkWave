import { defineStore, getActivePinia } from 'pinia';
import { api } from '../api/index'

type UserState = {
  accessToken: String,
  loading: Boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    accessToken: '',
    loading: false
  },
  getters: {},
  actions: {
    async login(username, password) {
      this.loading = true;

      await

      this.loading = false;
    }
  }
});