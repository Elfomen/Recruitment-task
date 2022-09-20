import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathOperationService } from '../math-operation.service';
import { Figure } from '../models/figureModel';

@Component({
  selector: 'app-figure-operation',
  templateUrl: './figure-operation.component.html',
  styles: [
  ] ,
  styleUrls: ['./figure-operation.component.css']
})
export class FigureOperationComponent implements OnInit {

  figure: Figure | undefined;

  figures: Figure[]

  constructor(private route: ActivatedRoute , private mathOperationService: MathOperationService) { }

  

  ngOnInit(): void {
    this.mathOperationService.getFigures().then(figuress => {
      this.figures = figuress
      const figureId: string | null = this.route.snapshot.paramMap.get("id")

      if(figureId){
        this.figure = this.mathOperationService.getFigureById(figureId , this.figures)
      }
    })
    
  }


  selectOperation(event: Event){
    // console.log((event.target as HTMLInputElement).value)
  }
    
}
