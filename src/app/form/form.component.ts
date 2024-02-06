import { Component } from '@angular/core';
import { Calc } from '../module/add';
import { FormBuilder, FormGroup } from '@angular/forms';
import { details } from '../module/formAction';

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

  myForm: FormGroup ;

  constructor(fb:FormBuilder){
    this.myForm= details.getdetails(fb)
  }


  onSubmit(){ 
    alert("Username : " + this.myForm.value.username);
  }


}
