import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import {RouterModule} from "@angular/router";
import {userRoutes} from "./users.routes";
import {UserService} from "../user.service";
import {UsersListGuard} from "./users-list.guard";

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule
  ],
  providers: [
    UserService,
    UsersListGuard
  ],
  declarations: [
    UsersListComponent,
  ]
})
export default class UsersModule { }
