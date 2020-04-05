import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatSelectModule,
     MatToolbarModule,
     MatTableModule
  ]
  ,
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
