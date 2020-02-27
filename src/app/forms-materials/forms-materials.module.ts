import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsMaterialsRoutingModule } from './forms-materials-routing.module';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { FormsComponent } from './forms/forms.component';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule  } from "@angular/material/datepicker";
import { MatNativeDateModule,MatFormFieldModule  } from "@angular/material/";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatCardModule } from "@angular/material/card"; 
import {MatSelectModule} from '@angular/material/select';
import { SprecialLayoutsComponent } from './sprecial-layouts/sprecial-layouts.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [FormControlsComponent, FormsComponent, SprecialLayoutsComponent],
  imports: [
    CommonModule,  
    FormsMaterialsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    MatStepperModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    //BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    MatCheckboxModule,
    MatDatepickerModule, //for datepiker
    MatNativeDateModule,  //for datepiker
    MatRadioModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers:[]
})
export class FormsMaterialsModule { 
  constructor(){
    console.log('FormsMaterialsModule loaded.....');
  }
}
