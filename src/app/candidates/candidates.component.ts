import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../core/services/candidates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor( 
    private candidatesService: CandidatesService,

    ){}


  allCandidates$ = this.candidatesService.getCandidates()

  ngOnInit(): void {
    
  }



  onDelete(id: any){

    this.candidatesService.deleteCandidate(id).subscribe(res => {
      console.log(res)
    })

  }

}
