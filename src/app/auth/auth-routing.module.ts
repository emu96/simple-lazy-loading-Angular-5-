import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: 'register-step-1', loadChildren: './register-step-1/register-step-1.module#RegisterStep1Module'}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }