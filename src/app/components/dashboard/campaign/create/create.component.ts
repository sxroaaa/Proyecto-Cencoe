import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/interfaces/campaign';
import { CampaignService } from 'src/app/services/campaign.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CrearCampaignComponent {
  estado: string [] = ['Asignado','En curso','Terminado'];
  form: FormGroup;

constructor(public dialogRef: MatDialogRef<CrearCampaignComponent>, private fb: FormBuilder, private _campaignService: CampaignService, private router: Router,private _snackBar: MatSnackBar){
  this.form = this.fb.group({
    id : ['', Validators.required],
    nombre : ['', Validators.required],
    capacidad : ['', Validators.required],
    fechaInicio : ['', Validators.required],
    fechaFinal : ['', Validators.required],
    observaciones: [''],
    equipo : ['', Validators.required],
    proveedor : ['', Validators.required],
    estado : ['', Validators.required],
  })
}
ngOnInit(): void {
}

cancelar(){
  this.dialogRef.close();

  }
agregarCampaign(){
  const campaign: Campaign = {
    campaign_id: this.form.value.id,
    campaign_name : this.form.value.nombre,
    campaign_capacity: this.form.value.capacidad,
    campaign_startDate: this.form.value.fechaInicio,
    campaign_endDate: this.form.value.fechaFinal,
    campaign_observations: this.form.value.observaciones,
    campaign_team:this.form.value.equipo,
    campaign_provider:this.form.value.proveedor,
    campaign_state: this.form.value.estado,
  }

  this._campaignService.agregarCampaign(campaign);
  this.router.navigate(['../../../dashboard/campaign'])

  this._snackBar.open('La campaña fue agregado con exito','',{
    duration: 5000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  })
}

}

