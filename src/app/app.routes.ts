import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'one',
    loadComponent: () => import('./components/component-1/component-1.component').then(m => m.Component1Component),
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
