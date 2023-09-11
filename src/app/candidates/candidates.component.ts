import { Component,  } from '@angular/core';
import {  Router } from '@angular/router';
import { CandidatesService } from '../features/services/candidates.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './detele/delete-confirmation-dialog/delete-confirmation-dialog.component';



@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],

  
})
export class CandidatesComponent  {

  constructor( 
    private candidatesService: CandidatesService,
    private dialog: MatDialog
   ){}


  allCandidates$ = this.candidatesService.getCandidates()


  

  onDelete(id: any) {
    this.candidatesService.deleteCandidate(id).subscribe((res) => {

      this.candidatesService.getCandidates().subscribe((updatedCandidates) => {
     
        this.allCandidates$ = of(updatedCandidates);
      });
  
     
    });

  }



  openDeleteConfirmationDialog(candidateId: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: { candidateId }, // Pass any data you need to the dialog
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // User confirmed the delete action, perform the deletion here
        this.onDelete(candidateId);
      }
    });

}


}