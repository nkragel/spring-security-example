import {UsersListComponent} from "./users-list/users-list.component";
import {Routes} from "@angular/router";
import {UsersListGuard} from "./users-list.guard";

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    canActivate: [UsersListGuard]
  }
];

export const userRoutes = routes;
