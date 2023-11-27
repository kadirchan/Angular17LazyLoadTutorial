import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component5Component} from "../component-5/component-5.component";
import {Component6Component} from "../component-6/component-6.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'five',
    pathMatch: 'prefix'
  },
  {
    path: 'five',
    component: Component5Component,
  },
  {
    path: 'six',
    component: Component6Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
