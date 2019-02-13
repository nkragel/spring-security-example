import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {loginRoutes} from "./login.routes";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoginPageGuard} from "./login-page.guard";

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [
    LoginPageGuard
  ],
  declarations: [
    LoginPageComponent
  ]
})
export default class LoginModule { }
