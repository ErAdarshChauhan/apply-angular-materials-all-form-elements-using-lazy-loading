import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms-materials/forms/forms.component';


const routes: Routes = [
  
   // {path:'forms-materials', loadChildren:'app/forms-materials/forms-materials.module#FormsMaterialsModule'},
    {
      path: 'forms-materials',
      loadChildren: () => import('./forms-materials/forms-materials.module').then(m => m.FormsMaterialsModule)
    },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
