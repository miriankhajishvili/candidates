import { Component,  } from '@angular/core';
import { CandidatesService } from '../features/services/candidates.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';




@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],

  
})
export class CandidatesComponent  {

  constructor( 
    private candidatesService: CandidatesService,
    public dialog : MatDialog
   ){}


  allCandidates$ = this.candidatesService.getCandidates()


  

  Delete(id: string) {
    this.candidatesService.deleteCandidate(id).subscribe((res) => {

      this.candidatesService.getCandidates().subscribe((updatedCandidates) => {
     
        this.allCandidates$ = of(updatedCandidates);
      });
       DeleteDialogComponent
     
    });

  }



  onDelete(candidateId: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
       this.Delete(candidateId)
      }
    });



}

}