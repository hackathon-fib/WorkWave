import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const users = {
  get: {
    async getUsers(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/users`, data, true);
    },
    async getUserById(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/users` + id, {}, true);
    }
  },
  post: {
    async createUser(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/users`, data, true);
    },
  }
};

export default users;