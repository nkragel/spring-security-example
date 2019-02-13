import {Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginPageGuard} from "./login-page.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [LoginPageGuard]
  }
];

export const loginRoutes = routes;
