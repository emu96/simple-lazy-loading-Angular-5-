import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button1Component } from '../button1/button1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Button1Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Button1Component]
})
export class Comp1Module { }
