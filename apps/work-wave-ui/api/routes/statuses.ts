import {HTTP_STATUS} from '@/helpers/enums';
import type {ApiResponse} from '../api';

import api from '../api';

const statuses = {
    get: {
        async getStatuses(data = {}): Promise<ApiResponse> {
            return await api(HTTP_STATUS.GET, `/api/statuses`, data, true);
        },
        async getStatusById(id: String): Promise<ApiResponse> {
            return await api(HTTP_STATUS.GET, `/api/statuses/` + id, {}, true);
        },
    },
    post: {
        async createStatus(data = {}): Promise<ApiResponse> {
            return await api(HTTP_STATUS.POST, `/api/statuses`, data, true);
        },
    }
};

export default statuses;