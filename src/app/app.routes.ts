import { Routes } from '@angular/router';
import {Component5Component} from "./components/component-5/component-5.component";
import {Component8Component} from "./components/component-8/component-8.component";
import {Module1Module} from "./components/module-1/module-1.module";
import {Component1Component} from "./components/component-1/component-1.component";

export const routes: Routes = [
  {
    path: 'one',
    component: Component1Component,
  },
  {
    path: 'two',
    loadComponent: () => import('./components/component-2/component-2.component').then(m => m.Component2Component),
  },
  {
    path: 'three',
    loadComponent: () => import('./components/component-3/component-3.component').then(m => m.Component3Component),
  },
  {
    path: 'auction',
    loadChildren: () => import('./components/module-1/module-1.module').then(m => m.Module1Module),
  }
];
