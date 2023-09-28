import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const teams = {
  get: {
    async getTeams(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/teams`, data);
    },
    async getTeamByID(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/teams` + id);
    },
  },
  post: {
    async createTeam(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/teams`, data);
    }
  }
};

export default teams;