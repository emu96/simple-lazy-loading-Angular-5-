import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStep2Component } from '../register-step-2/register-step-2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: RegisterStep2Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterStep2Component]
})
export class RegisterStep2Module { }