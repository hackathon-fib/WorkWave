import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const scheduleIntervals = {
  get: {
    async getScheduleIntervals(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/scheduleIntervals`, data);
    },
    async getScheduleIntervalById(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/scheduleIntervals` + id);
    },
  },
  post: {
    async createScheduleInterval(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/scheduleIntervals`, data);
    },
  }
};

export default scheduleIntervals;