import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http, RequestOptions} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {AuthService} from "./auth.service";
import {SecurityService} from "./security.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    SecurityService
  ],
  declarations: []
})
export class AuthModule {
}
