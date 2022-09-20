import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFiguresComponent } from './list-figures/list-figures.component';
import { FigureOperationComponent } from './figure-operation/figure-operation.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { OperationsFormComponent } from './operations-form/operations-form.component';

const mathOperationRoutes : Routes = [
  {
    path: "figure/:id" , 
    component: FigureOperationComponent
  } , 
  {
    path: "figures" , 
    component: ListFiguresComponent
  }
]

@NgModule({
  declarations: [
    ListFiguresComponent,
    FigureOperationComponent,
    NotFoundComponent,
    OperationsFormComponent
  ],
  imports: [
    CommonModule ,
    FormsModule ,
    RouterModule.forChild(mathOperationRoutes)
  ]
})

export class MathOperationsModule { }
