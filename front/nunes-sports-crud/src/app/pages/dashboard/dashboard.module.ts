import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ]
})
export class DashboardModule { }
