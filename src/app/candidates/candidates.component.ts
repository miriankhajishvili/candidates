import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { CandidatesService } from '../features/services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent  {

  constructor( 
    private candidatesService: CandidatesService,
    private router: Router){}


  allCandidates$ = this.candidatesService.getCandidates()


  

  onDelete(id: any){

    this.candidatesService.deleteCandidate(id).subscribe(res => {
      console.log(res)
      this.router.navigate(['/candidates']);
    })

  }

}
