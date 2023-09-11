import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { CandidatesService } from '../features/services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor( 
    private candidatesService: CandidatesService,
    private router: Router

    ){}


  allCandidates$ = this.candidatesService.getCandidates()

  ngOnInit(): void {
    // Fetch the initial list of candidates
    this.allCandidates$ = this.candidatesService.getCandidates();
  }


  onDelete(id: any) {
    this.candidatesService.deleteCandidate(id).subscribe(() => {
      // After deleting, navigate back to the candidate list route
      this.router.navigate(['/candidates']);
    });
  }
  

}
