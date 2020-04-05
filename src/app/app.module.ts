import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUserComponent } from './list-user/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './core/api.service';
import { routing } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { EditUserComponent } from './edit-user/edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user/add-user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ListUserComponent, EditUserComponent, AddUserComponent],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
