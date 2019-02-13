import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {

  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem('token') && !!localStorage.getItem('user');
  }

}
