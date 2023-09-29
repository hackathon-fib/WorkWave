import { DaySchedule } from './../../work-wave-admin/src/api/daySchedule/DaySchedule';
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
    async getUsers(team) {
      this.loading = true;

      const res = await apiCall.users.get.getUsers(team);

      if (!res) {
        //blow up here
      }

      this.users = res.data;

      // try {
      //   this.users.forEach(async (user: any, i) => {
      //     const dayScheduleRes = await apiCall.daySchedules.get.getDaySchedules(user.id);
      //     this.users[i].DaySchedule = dayScheduleRes.data;
      //   });
      // } catch(err) {
      //   console.error(err);
      // }
      // this.users.forEach(async (user, i) => {
      //   // const daySchedule = await apiCall.daySchedules.get.getDayScheduleById(user.id);
      //   this.users[i].daySchedule = dayScheduleRes.data;
      // });

      this.loading = false;

      return res.data
    },
    async getUsersForTeam(teamId: String) {
      this.loading = true;

      const res = await apiCall.users.get.getUsers({"company": {"id": teamId}});

      if (!res) {
        //blow up here
      }

      this.users = res.data;
      this.loading = false;

      return res.data
    },
    async getTeams() {
      this.loading = true;

      const res = await apiCall.teams.get.getTeams();

      if (!res) {
        console.info(res);
        //blow up here
      }

      this.loading = false;
      this.teams = res.data;

      return res.data
    }
  }
});