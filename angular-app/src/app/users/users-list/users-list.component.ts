import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [];
  errorMessage: string;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(
      users => this.users = users,
      error => this.errorMessage = error.json().message
    );
  }

  logout() {
    this.authService.logout();
  }

}
