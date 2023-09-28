import {HTTP_STATUS} from '@/helpers/enums';
import type {ApiResponse} from '../api';

import api from '../api';

const statuses = {
    get: {
        async getStatuses(data = {}): Promise<ApiResponse> {
            return await api(HTTP_STATUS.GET, `/api/statuses`, data);
        },
        async getStatusById(id: String): Promise<ApiResponse> {
            return await api(HTTP_STATUS.GET, `/api/statuses/` + id);
        },
    },
    post: {
        async createStatus(data = {}): Promise<ApiResponse> {
            return await api(HTTP_STATUS.POST, `/api/statuses`, data);
        },
    }
};

export default statuses;