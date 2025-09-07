import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Manage} from './pages/manage/manage';

export const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : Home},
  {path : 'manageproduct', component: Manage},
  {path : 'manage', redirectTo: 'manageproduct', pathMatch: 'full'},
];
