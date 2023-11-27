import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module-1-routing.module';
import {Component6Component} from "../component-6/component-6.component";
import {Component3Component} from "../component-3/component-3.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module1RoutingModule,
    Component3Component,
  ]
})
export class Module1Module { }
