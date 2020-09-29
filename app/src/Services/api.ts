/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import Config from '../Global/Config';
class API {
  constructor() {
    axios.defaults.baseURL = Config.baseUrl;
    // Use this to inject anything with all the request
  }
  async get(url:string) {
    return axios.get(url);
  }
  async put(url: string, data: any) {
    return axios.put(url, data);
  }
}
export default new API();