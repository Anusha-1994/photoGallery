/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { observable, decorate, action } from 'mobx';
import dashBoardService from '../Services/dashBoardService';
import Constant from '../Global/Constant';

class DashboardStore {
    gallery: Array<any> = [];

    async getGallery(callback: any) {
        try {
            const response = await dashBoardService.getGallery();
            this.gallery = response.data.result;
            callback(null);
        } catch (err) {
            let errorMsg = Constant.defaultErrorMessage;
            if (err && err.response && err.response.data && err.response.data.error) {
                errorMsg = err.response.data.error.message;
            }
            callback(new Error(errorMsg));
        }
    }

    async updateDetails(details: any, callback: any) {
        try {
            const response = await dashBoardService.updateDetails(details);
            const { result } = response.data;
            callback(null);
        } catch (err) {
            let errorMsg = Constant.defaultErrorMessage;
            if (err && err.response && err.response.data && err.response.data.error) {
                errorMsg = err.response.data.error.message;
            }
            callback(new Error(errorMsg));

        }
    }

}

decorate(DashboardStore, {
    gallery: observable,
    getGallery: action,
    updateDetails : action
});

export default new DashboardStore();
