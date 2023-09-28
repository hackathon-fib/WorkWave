import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const daySchedules = {
  get: {
    async getDaySchedules(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/daySchedules`, data);
    },
    async getDayScheduleById(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/daySchedules` + id);
    },
  },
  post: {
    async createDaySchedule(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/daySchedules`, data);
    },
  }
};

export default daySchedules;