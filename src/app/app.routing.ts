import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'button1', loadChildren: './comp1/comp1.module#Comp1Module'},
  {path: 'button2', loadChildren: './comp2/comp2.module#Comp2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }