import { HTTP_STATUS } from '@/helpers/enums';
import type { ApiResponse } from '../api';

import api from '../api';

const companies = {
  get: {
    async getCompanies(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/companies`, data);
    },
    async getCompanyById(id: String): Promise<ApiResponse> {
      return await api(HTTP_STATUS.GET, `/api/companies/` + id);
    },
  },
  post: {
    async createCompany(data = {}): Promise<ApiResponse> {
      return await api(HTTP_STATUS.POST, `/api/companies`, data);
    },
  }
};

export default companies;