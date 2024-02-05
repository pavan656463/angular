import { Component } from '@angular/core';
import { Calc } from '../module/add';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name:string = "Pavan" ;// calling the dtring string interpolation  
  status:string = "online" ;   //calling through function 
  
  getStatus(){ 
    const calculator = new Calc() ; 
    return calculator.getAdd(5,6)
  }
}
