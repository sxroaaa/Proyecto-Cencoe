import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StartComponent } from './start/start.component';
import { ClusterComponent } from './cluster/cluster.component';
import { UserComponent } from './user/user.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';
import { CrearCampaignComponent } from './campaign/create/create.component';
import { EditarCampaignComponent } from './campaign/edit/edit.component';




const routes: Routes = [//configurar ruta
{ path: '', component: DashboardComponent, children:[
  { path: '', component: StartComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'Cluster', component: ClusterComponent },
  { path: 'report', component: ReportComponent },
  { path: 'user', component: UserComponent },
  { path: 'create', component: CrearCampaignComponent },
  { path: 'edit', component: EditarCampaignComponent },

]}//renderizar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
