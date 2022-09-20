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

  // default values for length, width and radius
  len : string="0.1"

  wid : string="0.1"

  radius : string="0.1"

  // conversion posibility default value is meter
  conversion:string = "meter"

  // the value of pi used
  pi: number = 3.14569

  // the result of the calculated perimeter or radius
  result : number;

  // this is the variable that serves as the default value for unit of measurement when the user inputs the values
  unitOfMeasurement: string = "m"

  // when there is a conversion, the conversion is going to be saved here, default -1 if there is no conversion yet
  convertedResult: number = -1

  // this is the description part of the solution we are going to show to the user eg (Figure used : Circle)
  solutionDescription : string = ""

  // this is still part of the result we are going to show to the user eg (operation used: Perimeter)
  operationResult : string = ""

  // this is what we are going to format and show to the user after calculation is done (eg Result: 0.3 km)
  finalResult : string = ""

  // these is a list of all the conversion possibilities (for example, if user enters value in km then conversion possibilities
  // are m , cm , dm and km)
  conversionPosibilities: string[]

  // this is going to return the list of all units
  conversionUnits: string[]

  // all the units of measurement from the database
  units: Unit[]

  constructor(private mathOperationService: MathOperationService) { }

  ngOnInit(): void {
    this.mathOperationService.getConvertionUnits().then(unitss => {
      this.units = unitss
    })
    this.conversionPosibilities = ['meter' , 'centimeter' , 'kilometer' , 'decimeter'] // by default, the conversion posibilities in meter
    this.conversionUnits = this.mathOperationService.getAllUnits()
  }

  setSolution(unit: string | undefined){ // set the result to the users vue after calculation is done
    this.convertedResult = this.convertedResult == -1 ? this.result : this.convertedResult
    this.solutionDescription = `Figure : ${this.figure.type}`
    this.operationResult = `Operation : ${this.operation}`
    this.finalResult = `Result : ${this.convertedResult} ${unit== undefined ? this.unitOfMeasurement : unit}`
    this.convertedResult = -1
  }

  setConversionPosibilities(event: Event){ // on change of the unit of measurement by the user, we reset the conversion posibillities
    const op = this.unitOfMeasurement[this.unitOfMeasurement.length - 1]
    this.conversion = `meter${op!='m' ? this.unitOfMeasurement[this.unitOfMeasurement.length - 1] : ''}`
    // const op = (event.target as HTMLInputElement).value
    this.conversionPosibilities = this.mathOperationService.prepareConversionPossibilities(op=="²" ? "square": op == "³" ? "cube" : "normal")
  } // this function is going to return the list of all the possible conversion dependinig on what the user choosed whether km or cm

  convertResult(event: Event){ // convert the result to any conversion unit the user chooses
    const last = this.conversion[this.conversion.length - 1] // the conversion units are (meters, meters² etc, so we get the last character
    // of conversion unit to verify whether it is ² or cube etc)
    const power = last == 'r' ? 1 : last == '²' ? 2 : 3 // we set the power with what we got above
    const from: string = this.unitOfMeasurement[this.unitOfMeasurement.length - 1]=='m' ? this.unitOfMeasurement : this.unitOfMeasurement.replace(this.unitOfMeasurement[this.unitOfMeasurement.length - 1] , '')
    const to: string = this.conversion[0] != 'm' ? `${this.conversion[0]}m` : this.conversion[0]
    this.convertedResult = this.mathOperationService.convertUnit(to ,from , this.result , power , this.units)

    // this.result = this.mathOperationService.convertUnit(to ,from , this.result , power)

    this.setSolution(`${to}${power == 2 ? '²' : power==3 ? '³' : ''}`)
  }

  handleFormSubmition(){ // execute when the form is submitted
    switch(this.figure.type){
      case 'circle':
        this.result = this.mathOperationService.calculateCircleOperation(+this.radius , this.pi , this.operation)
        this.setSolution(undefined)
        break
      case 'triangle':
        this.result = this.mathOperationService.calculateTriangleOperation(+this.len , +this.wid , this.operation)
        this.setSolution(undefined)
        break
      case 'rectangle':
        this.result = this.mathOperationService.calculateRectangleOperation(+this.len , +this.wid , this.operation)
        this.setSolution(undefined)
        break;
      case 'square':
        this.result = this.mathOperationService.calculateSquareOperation(+this.wid , this.operation)
        this.setSolution(undefined)
    }
  }

}
