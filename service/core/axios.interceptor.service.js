import axios from 'axios';
import LocalStorageService from './LocalStorage.service';
// LocalstorageService

const localStorageService = new LocalStorageService();

export default class Interceptor {
  constructor(actionUrl) {
    axios.create({
      apiUrl: actionUrl
    });
    // Add a request interceptor

    axios.interceptors.request.use(
      config => {
        const token = localStorageService.getAccessToken();
        if (token) {
          config.headers['Authorization'] = token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
      },
      error => {
        Promise.reject(error);
      }
    );
  }
  Http() {
    return axios;
  }
}
