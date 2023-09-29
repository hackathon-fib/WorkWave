import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const daySchedules = {
  get: {
    async getDaySchedules(data = {}): Promise<ApiResponse> {
      let whereClause = '';
      if (data) {
        whereClause = `?where%5Bdate%5D[equals]=2023-09-29T00:00:00.000Z&where%5Buser%5D[id]=${data}`
      }
      return await api(HTTP_STATUS.GET, `/api/daySchedules${whereClause}`, data, true);
    },
    async getDayScheduleById(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/daySchedules/` + id, {}, true);
    },
  },
  post: {
    async createDaySchedule(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/daySchedules`, data, true);
    },
  }
};

export default daySchedules;