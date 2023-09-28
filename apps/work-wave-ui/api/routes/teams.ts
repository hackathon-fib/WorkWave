import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const teams = {
  get: {
    async getTeams(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/teams`, data, true);
    },
    async getTeamByID(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/teams` + id, {}, true);
    },
  },
  post: {
    async createTeam(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/teams`, data, true);
    }
  }
};

export default teams;