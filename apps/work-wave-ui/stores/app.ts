import { defineStore, getActivePinia } from 'pinia';
import apiCall from '../api'

type AppState = {
  errorModal: any,
  loading: Boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    errorModal: {},
    loading: false
  }),
  getters: {},
  actions: {

  }
});