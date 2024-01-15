import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Campaign } from 'src/app/interfaces/campaign';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditarCampaignComponent implements OnInit{
  tipoEstado: string [] = ['Asignado','En curso','Terminado'];
  form: FormGroup;

constructor(public dialogRef: MatDialogRef<EditarCampaignComponent>, private fb: FormBuilder){
  this.form = this.fb.group({
    id : ['' , Validators.required],
    nombre : ['' ,Validators.required],
    capacidad : ['' ,Validators.required],
    fechaInicio : ['null' ,Validators.required],
    fechaFinal : ['null' ,Validators.required],
    observaciones: ['' ,Validators.required],
    equipo : ['' ,Validators.required],
    proveedor : ['' ,Validators.required],
    estado : ['null' ,Validators.required]
  })
}

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();

  }
  addEditarCampaign(){
    const campaign: Campaign = {
      campaign_id: this.form.value.id,
      campaign_name: this.form.value.nombre,
      campaign_capacity: this.form.value.cantidad,
      campaign_startDate: this.form.value.fechaInicio,
      campaign_endDate: this.form.value.fechaFin,
      campaign_observations: this.form.value.observaciones,
      campaign_team: this.form.value.equipo,
      campaign_provider: this.form.value.proveedor,
      campaign_state: this.form.value.estado
    }
  }

}

