/* eslint-disable no-console */
import Interceptor from '../core/axios.interceptor.service';
// import { map } from 'rxjs/operators';

export default class DataService {
  constructor() {
    this.actionUrl = 'http://3.134.184.19:3000/api/';
    // this.actionUrl = 'http://localhost:30001/api/';
    this.resolveSuffix = '?resolve=true';

    const axios = new Interceptor(this.actionUrl);
    this.http = axios.Http();
  }

  getList(ns) {
    console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
    return this.http.get(`${this.actionUrl}${ns}`);
    //.pipe(map(this.extractData));
  }
  getListWitFilter(ns, filter) {
    console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
    return this.http.get(`${this.actionUrl}${ns}/${filter}`);
    // .pipe(map(this.extractData));
  }

  getSingle(ns, id) {
    console.log('GetSingle ' + ns);

    return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix);
    // .pipe(map(this.extractData));
  }

  getByData(ns, asset) {
    return this.http.get(this.actionUrl + ns, asset);
    // .pipe(map(this.extractData));
  }

  post(ns, asset) {
    return this.http.post(this.actionUrl + ns, asset);
    // .pipe(map(this.extractData));
  }
  postById(ns, id, asset) {
    return this.http.post(this.actionUrl + ns + '/' + id, asset);
    // .pipe(map(this.extractData));
  }

  extractData(res) {
    return res;
  }
}
