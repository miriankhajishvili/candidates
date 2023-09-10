import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesDetailRoutingModule } from './candidates-detail-routing.module';
import { CandidatesDetailComponent } from './candidates-detail.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'

import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CandidatesDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatesDetailRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
   
    
  ]
})
export class CandidatesDetailModule { }
