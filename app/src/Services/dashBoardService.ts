import api from './api';

class DashboardService {
    getGallery = async () => api.get(`/getphotos`);
    updateDetails = async (data: any) => api.put(`/updateDetails`, data)

}

export default new DashboardService();
