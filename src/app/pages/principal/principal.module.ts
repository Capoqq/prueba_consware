import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TareaComponent } from './tarea/tarea.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    TareaComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedModule
  ]
})
export class PrincipalModule { }
