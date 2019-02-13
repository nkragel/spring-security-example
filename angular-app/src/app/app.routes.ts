import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module'
  },
  {
    path: 'users',
    loadChildren: './users/users.module'
  }
];

export const routing = RouterModule.forRoot(routes);
