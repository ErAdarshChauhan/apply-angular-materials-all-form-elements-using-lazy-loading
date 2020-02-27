import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { SprecialLayoutsComponent } from './sprecial-layouts/sprecial-layouts.component';


const routes: Routes = [
  {
    path:'', 
    children:[
      {path:'', component: FormsComponent, pathMatch:'full'},
      { path:'input-forms', component:FormControlsComponent},
      {path:'special-layout-forms', component: SprecialLayoutsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsMaterialsRoutingModule { }
