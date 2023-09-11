import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { MatDividerModule} from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './detele/delete-confirmation-dialog/delete-confirmation-dialog.component';







@NgModule({
  declarations: [
    CandidatesComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,

    
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule

    
  ]
})
export class CandidatesModule { }
