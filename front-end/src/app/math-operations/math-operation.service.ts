import { Injectable } from '@angular/core';
import { Unit } from './models/units';
import { FIGURES } from './raw/figures';

@Injectable({
  providedIn: 'root'
})

export class MathOperationService {

  constructor() { }

  getFigures(){
    // attack the api to retrive the list of figures
    return FIGURES
  }

  getFigureById(figureId: string){
    return FIGURES.find((figure) => figure.id == +figureId)
  }

  // operations

  calculateCircleOperation(radius: number , pi: number , operation: string): number{
    if(operation == 'perimeter') return 2 * pi * radius

    return pi * radius * radius
    
  }

  calculateTriangleOperation(length: number , width: number , operation: string): number{
    if(operation == 'perimeter') return (length * 2) + (width * 2)

    return length * width
  }

  calculateSquareOperation(length: number , operation: string): number{
    if(operation == 'perimeter') return (length * 4)

    return length * length
  }

  calculateRectangleOperation(length: number , width: number , operation: string): number{
    if(operation == 'perimeter') return (length * 2) + (width * 2)

    return length * width
  }

  convert(type: string , value: number , by: number , power: number){
    switch(type){
      case 'divide':
        const dev = value / by
        return power == 1 ? dev : power == 2 ? dev / by: (dev / by) / by
      case 'multiply':
        const mul = value * by
        return power == 1 ? mul : power == 2 ? mul * by: (mul * by) * by
      default:
        return value
    }
  }

  convertUnit(to: string , from: string , value: number , power: number): number{
    const units: Unit[] = this.getConvertionUnits()

    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      if(from==unit.unit.title){
        for (let index = 0; index < unit.unit.conversions.length; index++) {
          const conversion = unit.unit.conversions[index];

          if(to == conversion.title){
            return this.convert(conversion.type , value , conversion.by , power)
          }
          
        }
      }
    }

    return value

  }

  prepareConversionPossibilities(type: string)  {
    switch(type){
      case 'normal':
        return ['meter' , 'kilometer' , 'centimeter' , 'decimeter']
      case 'square':
        return ['meter²' , 'centimeter²' , 'decimeter²' , 'kilometer²']
      case 'cube':
        return ['meter³' , 'centimeter³' , 'decimeter³' , 'kilometer³']
      default:
        return []
    }
  }


  getConvertionUnits(){
    const unit : Unit[] = [{
      'unit': {
        'title': 'cm' , 
        conversions: [
          {
            title: 'm' , 
            type: 'divide' ,
            by: 100
          } ,
          {
            title: 'km' , 
            type: 'divide' ,
            by: 100000
          } ,
          {
            title: 'dm' , 
            type: 'divide' , 
            by: 10
          }
        ]
       
      }  
    } , 
    {
      'unit': {
        'title': 'dm' , 
        conversions: [
          {
            title: 'm' , 
            type: 'divide' ,
            by: 10
          } ,
          {
            title: 'km' , 
            type: 'divide' ,
            by: 10000
          } ,
          {
            title: 'cm' , 
            type: 'multiply' , 
            by: 10
          }
        ]
      }  
    } ,
    {
      'unit': {
        'title': 'm' , 
        conversions: [
          {
            title: 'dm' , 
            type: 'multiply' ,
            by: 10
          } ,
          {
            title: 'km' , 
            type: 'divide' ,
            by: 1000
          } ,
          {
            title: 'cm' , 
            type: 'multiply' , 
            by: 100
          }
        ]
      }  
    } ,
    {
      'unit': {
        'title': 'km' , 
        conversions: [
          {
            title: 'dm' , 
            type: 'multiply' ,
            by: 10000
          } ,
          {
            title: 'm' , 
            type: 'multiply' ,
            by: 1000
          } ,
          {
            title: 'cm' , 
            type: 'multiply' , 
            by: 100000
          }
        ]
      }  
    }
  ]

  return unit
  }


  getAllUnits() {
    return ['m' , 'm²' , 'm³' , 'cm' , 'cm²' ,'cm³' , 'km' ,
     'km²' , 'km³' , 'dm'  , 'dm²' , 'dm³']
  }

}
