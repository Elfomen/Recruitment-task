import { VariableBinding } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MathOperationService } from '../math-operation.service';
import { Figure } from '../models/figureModel';
import { Unit } from '../models/units';

@Component({
  selector: 'app-operations-form',
  templateUrl: './operations-form.component.html',
  styles: [
  ] , 
  styleUrls: ['./operation-form.component.css']
})
export class OperationsFormComponent implements OnInit {

  @Input() figure: Figure;
  @Input() operation: string;

  len : string="0.1"

  model : string="0.1"

  conversion:string = "meter"

  wid : string="0.1"

  pi: number = 3.14569

  result : number;

  unitOfMeasurement: string = "m"

  convertedResult: number = -1

  solutionDescription : string = ""

  operationResult : string = ""

  finalResult : string = ""

  conversionPosibilities: string[]

  conversionUnits: string[]

  constructor(private mathOperationService: MathOperationService) { }

  ngOnInit(): void {
    this.conversionPosibilities = ['meter' , 'centimeter' , 'kilometer' , 'decimeter']
    this.conversionUnits = this.mathOperationService.getAllUnits()
  }

  setSolution(){
    this.convertedResult = this.convertedResult == -1 ? this.result : this.convertedResult
    this.solutionDescription = `Figure : ${this.figure.type}`
    this.operationResult = `Operation : ${this.operation}`
    this.finalResult = `Result : ${this.convertedResult} ${this.unitOfMeasurement}`
    this.convertedResult = -1
  }

  setConversionPosibilities(event: Event){
    const op = this.unitOfMeasurement[this.unitOfMeasurement.length - 1]
    this.conversion = `meter${op!='m' ? this.unitOfMeasurement[this.unitOfMeasurement.length - 1] : ''}`
    // const op = (event.target as HTMLInputElement).value
    this.conversionPosibilities = this.mathOperationService.prepareConversionPossibilities(op=="²" ? "square": op == "³" ? "cube" : "normal")
    console.log(this.unitOfMeasurement)
  } // this function is going to return the list of all the possible conversion dependinig on what the user choosed whether km or cm

  convertResult(event: Event){
    const last = this.conversion[this.conversion.length - 1]
    const power = last == 'r' ? 1 : last == '²' ? 2 : 3 
    const from: string = this.unitOfMeasurement[this.unitOfMeasurement.length - 1]=='m' ? this.unitOfMeasurement : this.unitOfMeasurement.replace(this.unitOfMeasurement[this.unitOfMeasurement.length - 1] , '')
    const to: string = this.conversion[0] != 'm' ? `${this.conversion[0]}m` : this.conversion[0]
    this.convertedResult = this.mathOperationService.convertUnit(to ,from , this.result , power)
    // this.result = this.mathOperationService.convertUnit(to ,from , this.result , power)
    this.setSolution()
  }

  handleFormSubmition(){ 
    switch(this.figure.type){
      case 'circle':
        this.result = this.mathOperationService.calculateCircleOperation(+this.model , this.pi , this.operation)
        this.setSolution()
        break
      case 'triangle':
        this.result = this.mathOperationService.calculateTriangleOperation(+this.len , +this.wid , this.operation)
        this.setSolution()
        break
      case 'rectangle':
        this.result = this.mathOperationService.calculateRectangleOperation(+this.len , +this.wid , this.operation)
        this.setSolution()
        break;
      case 'square':
        this.result = this.mathOperationService.calculateSquareOperation(+this.wid , this.operation)
        this.setSolution()
    }
  }

}
