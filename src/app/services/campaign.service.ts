import { Injectable } from '@angular/core';
import { Campaign } from '../interfaces/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  listCampaign: Campaign[] = [
    {campaign_id: 1, campaign_name: 'Hydrogen',campaign_capacity: 'Hydrogen',campaign_startDate: new Date,campaign_endDate:new Date,campaign_observations:'Hydrogen',campaign_team:'Hydrogen',campaign_provider:'Hydrogen',campaign_state:'Hydrogen'},
    {campaign_id: 2, campaign_name: 'Helium', campaign_capacity: 'Hydrogen',campaign_startDate: new Date,campaign_endDate:new Date,campaign_observations:'Hydrogen',campaign_team:'Hydrogen',campaign_provider:'Hydrogen',campaign_state:'Hydrogen'},
    {campaign_id: 3, campaign_name: 'Lithium', campaign_capacity: 'Hydrogen',campaign_startDate: new Date,campaign_endDate:new Date,campaign_observations:'Hydrogen',campaign_team:'Hydrogen',campaign_provider:'Hydrogen',campaign_state:'Hydrogen'},
    {campaign_id: 4, campaign_name: 'Beryllium', campaign_capacity: 'Hydrogen',campaign_startDate: new Date,campaign_endDate:new Date,campaign_observations:'Hydrogen',campaign_team:'Hydrogen',campaign_provider:'Hydrogen',campaign_state:'Hydrogen'},

  ];

  constructor() { }

  getCampaign(){
    return this.listCampaign.slice();
  }

  eliminarCampaign(index: number){
    this.listCampaign.splice(index,1);
  }

  agregarCampaign(campaign: Campaign){
    this.listCampaign.unshift(campaign);
  }
}
