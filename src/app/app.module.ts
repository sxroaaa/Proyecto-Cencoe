import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.mosdule';

//componentes
import { LoginComponent } from './components/login/login.component';
import { CampaignComponent } from './components/dashboard/campaign/campaign.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { ClusterComponent } from './components/dashboard/cluster/cluster.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CampaignComponent,
    ClusterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
