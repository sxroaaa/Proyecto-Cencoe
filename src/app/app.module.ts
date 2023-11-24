import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUsuariosComponent } from './pages/admin/admin-usuarios/admin-usuarios.component';
import { AdminCampaignsComponent } from './pages/admin/admin-campaigns/admin-campaigns.component';
import { AdminTeamsComponent } from './pages/admin/admin-teams/admin-teams.component';
import { AdminReportesComponent } from './pages/admin/admin-reportes/admin-reportes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUsuariosComponent,
    AdminCampaignsComponent,
    AdminTeamsComponent,
    AdminReportesComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
