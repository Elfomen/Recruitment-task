import { Injectable } from '@angular/core';
import { Unit } from './models/units';
import { FIGURES } from './raw/figures';
import axios from './axios'
import { Figure } from './models/figureModel';

@Injectable({
  providedIn: 'root'
})

// ###################### OPERTION SERVICES ###################################################

export class MathOperationService {

  constructor() { }

   getFigures  () {
    return axios.get('/figures').then(result => {
      console.log(result["data"])
      return result["data"]
    }).catch(error => {
      console.log(error)
    })
    // attack the api to retrive the list of figures
  }

  // this function is going to get one figure by it id
  getFigureById(figureId: string , figures: Figure[]){
    return figures.find((figure) => figure.id == +figureId)
  }

  // operations

  calculateCircleOperation(radius: number , pi: number , operation: string): number{ // calculate the circle operation depending on the type the user entered
    // (either perimeter or meter)
    if(operation == 'perimeter') return 2 * pi * radius
    return pi * radius * radius
  }

  calculateTriangleOperation(length: number , width: number , operation: string): number{// calculate the triangle operation depending on the type the user entered
    // (either perimeter or meter)
    if(operation == 'perimeter') return (length * 2) + (width * 2)

    return length * width
  }

  calculateSquareOperation(length: number , operation: string): number{// calculate the square operation depending on the type the user entered
    // (either perimeter or meter)
    if(operation == 'perimeter') return (length * 4)

    return length * length
  }

  calculateRectangleOperation(length: number , width: number , operation: string): number{// calculate the rectangle operation depending on the type the user entered
    // (either perimeter or meter)
    if(operation == 'perimeter') return (length * 2) + (width * 2)

    return length * width
  }

  convert(type: string , value: number , by: number , power: number){ // this method is called inside the convert unit method 
    // to convert a value given the unit, the power and the formulas in parameter
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

  convertUnit(to: string , from: string , value: number , power: number , units: Unit[]): number{
    // this function is the function that is called inside the form component to convert any operation from a ginven unit to 
    // a given unit
    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      if(from==unit.unit.title){
        for (let index = 0; index < unit.unit.conversions.length; index++) {
          const conversion = unit.unit.conversions[index];

          if(to == conversion.title){
            return this.convert(conversion.type , value , conversion.by , power) // call the convert with the conversion type and the value to be converted with the formulars for it to convert
          }
          
        }
      }
    }
    return value
   
    // we get the list of conversion units from the database

    // now we loop into the conversion unit, if we find the unit we want to convert, we loop into its conversions, now if we 
    // find the unit we want to convert to, we use the formular of that unit to convert

    // we call a special method convert we declared above to make the conversion if the above two steps are verified

    // you can check the unit model for more specification on how the units are structured
   
  }

  prepareConversionPossibilities(type: string)  { // this method is used in the form conponent, when there is 
    // change in the conversion unit
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


  getConvertionUnits() { // get the list of conversion units from the database
    return axios.get('/units').then(result => {
       return result["data"]
    }).catch(error => {
      return []
    })
  }


  getAllUnits() { // get all the list of possible units
    return ['m' , 'm²' , 'm³' , 'cm' , 'cm²' ,'cm³' , 'km' ,
     'km²' , 'km³' , 'dm'  , 'dm²' , 'dm³']
  }

}
