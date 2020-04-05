import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user/add-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'list-user', component: ListUserComponent },
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user', component: EditUserComponent}
];


export const routing = RouterModule.forRoot(routes);
