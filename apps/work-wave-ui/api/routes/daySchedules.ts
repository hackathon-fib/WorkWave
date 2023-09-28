import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const auth = {
  post: {
    async login(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/login`, data);
    }
  },
};

export default auth;