import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStep1Component } from '../register-step-1/register-step-1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: RegisterStep1Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterStep1Component]
})
export class RegisterStep1Module { }