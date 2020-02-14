import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from "@angular/forms";

//create interface
interface Accessory {
  name: string;
  
}


@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  signupForm : FormGroup;
  'fName' : string;
  'lName' : string;
  'email' : string;
  'address' : string;
  'c1' : string;
  'gender' : string;  
  'date' : string;
  'checkbox1' : string;;
  'accept_terms' : string
  'collectAccessories' : string;

  ;

//create data
  accessories : Accessory[] = [
          {name:'Bag'},
          {name:'Laptop'},
          {name:'I-card'},
          {name:'Metro-Card'},
          {name:'Lunch'}
];

  constructor(private builder: FormBuilder) {
        this.signupForm = this.builder.group({
          fname : ['',Validators.required],
          lname : ['',Validators.required],
          email : ['', Validators.compose([Validators.required, Validators.email])],
          address : ['',Validators.required],
          gender : ['',Validators.required],
          date : ['',Validators.required],
          checkbox1 : ['',Validators.required],
          accept_terms : ['',Validators.required],
          collectAccessories : ['',Validators.required],
          });
   }

   postData(){
      console.log(this.signupForm);
      
  }

  resetForm(){
    this.signupForm.reset();
  }

  ngOnInit() {
    
  }

  // getEmailErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
  
}
