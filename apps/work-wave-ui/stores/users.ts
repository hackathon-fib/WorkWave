import { defineStore, getActivePinia } from 'pinia';
import apiCall from '../api'

type UsersState = {
  users: [],
  teams: [],
  loading: Boolean
}

export const useUsersStore = defineStore('users', {
  state: (): UserState => ({
    users: [],
    teams: [],
    loading: false
  }),
  getters: {},
  actions: {
    async getUsers() {
      this.loading = true;

      const res = await apiCall.auth.post.login({username, password});

      if (!res) {
        //blow up here
      }

      this.loading = false;

      return res.data
    },
    async getTeams() {
      this.loading = true;

      const res = await apiCall.auth.post.login({username, password});

      if (!res) {
        //blow up here
      }

      this.loading = false;

      return res.data
    }
  }
});