import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button2Component } from '../button2/button2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Button2Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Button2Component]
})
export class Comp2Module { }
