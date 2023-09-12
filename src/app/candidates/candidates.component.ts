import { Component,  } from '@angular/core';
import {  Router } from '@angular/router';
import { CandidatesService } from '../features/services/candidates.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../shared/main-layout/detele/delete-confirmation-dialog/delete-confirmation-dialog.component';



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


  

  onDelete(id: string) {
    this.candidatesService.deleteCandidate(id).subscribe((res) => {

      this.candidatesService.getCandidates().subscribe((updatedCandidates) => {
     
        this.allCandidates$ = of(updatedCandidates);
      });
  
     
    });

  }



  openDeleteConfirmationDialog(candidateId: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: { candidateId },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
      
        this.onDelete(candidateId);
      }
    });

}


}