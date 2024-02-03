import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name:string = "Pavan" ;// calling the dtring string interpolation  
  status:string = "online" ;   //calling through function 
  
  getStatus(){ 
    return this.status ; 
  }
}
