import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {
    path:"login",
    loadChildren: ()=> import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path:"principal",
    loadChildren: ()=> import("./pages/principal/principal.module").then(m => m.PrincipalModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

