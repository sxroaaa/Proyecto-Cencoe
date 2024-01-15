import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';

import { SharedModule } from '../shared/shared.mosdule';
import { EditarCampaignComponent } from './campaign/edit/edit.component';
import { CrearCampaignComponent } from './campaign/create/create.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StartComponent } from './start/start.component';





@NgModule({
  declarations: [
    DashboardComponent,
    StartComponent,
    NavbarComponent,
    CustomerComponent,
    ReportComponent,
    CrearCampaignComponent,
    EditarCampaignComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
