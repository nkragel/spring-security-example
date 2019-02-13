import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";

import { environment } from 'environments/environment';

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp) { }

  findAll() {
    return this.authHttp.get(`${environment.serverUrl}/users`).map(res => res.json());
  }

  findOne(id: number) {
    return this.authHttp.get(`${environment.serverUrl}/users/${id}`).map(res => res.json());
  }

}
