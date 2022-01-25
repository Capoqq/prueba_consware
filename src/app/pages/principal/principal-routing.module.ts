import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { TareaComponent } from './tarea/tarea.component';

const routes: Routes = [
  {
    path:"",
    component:PrincipalComponent
  },
  {
    path:"tarea/:id",
    component:TareaComponent
  },
  {
    path:"tarea",
    component:TareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
