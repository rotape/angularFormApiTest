import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDataFormComponent} from './basic-data-form/basic-data-form.component';

const routes: Routes = [
  {path: '', component: BasicDataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
