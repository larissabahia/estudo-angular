import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  constructor() {
    
  }

  public heroi: any = {
    nome:"",
    idade: NaN,
    poder: ""

  } 


 
}
