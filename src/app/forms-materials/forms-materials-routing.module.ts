import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FormControlsComponent } from './form-controls/form-controls.component';


const routes: Routes = [
  {
    path:'', 
    children:[
      {path:'', component: FormsComponent, pathMatch:'full'},
      { path:'input-forms', component:FormControlsComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsMaterialsRoutingModule { }
