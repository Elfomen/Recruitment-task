import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FigureOperationComponent } from '../figure-operation/figure-operation.component';
import { MathOperationService } from '../math-operation.service';
import { Figure } from '../models/figureModel';

@Component({
  selector: 'app-list-figures',
  templateUrl: './list-figures.component.html',
  styles: [
  ] ,
  styleUrls: [
    './list-figures.component.css'
  ]
})
export class ListFiguresComponent implements OnInit {

  figureList: Figure[] | void;

  constructor(private mathOperationService: MathOperationService , private router: Router) { }

  ngOnInit(): void {
    this.mathOperationService.getFigures().then(result => {
      this.figureList= result
    }).catch(err => {
      this.figureList = []
    })
    console.log(this.figureList)
  }

  goToFigureOperation(figure: Figure){
    this.router.navigate([`/figure/${figure.id}`])
  }

}
