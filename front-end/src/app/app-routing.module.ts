import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './math-operations/not-found/not-found.component';

const routes: Routes = [
  {
    path: "" , 
    redirectTo: "figures" , 
    pathMatch: "full"
  } , 
  {
    path: "**" ,
    component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
