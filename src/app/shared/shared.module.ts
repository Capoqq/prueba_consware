import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { LoguotComponent } from './loguot/loguot.component';
@NgModule({
  declarations: [
    LoguotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSelectModule

  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    LoguotComponent
  ]
})
export class SharedModule { }
