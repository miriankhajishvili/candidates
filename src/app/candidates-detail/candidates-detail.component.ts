import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from '../core/services/candidates.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.scss']
})
export class CandidatesDetailComponent implements OnInit {

  currentCandidate!: any 
  clientStatuses : any[] = []
  skills: any[] = [] 


  constructor(
    private activatedRoute: ActivatedRoute,
    private candidatesService: CandidatesService){}


  forms: FormGroup = new FormGroup({
    
    name : new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    statusId : new FormControl('', Validators.required),
    skillIds: new FormArray([]),

  })

  getCandidateById(id: number) {
    this.candidatesService.getCandidateById(id).subscribe((res) => {
      this.currentCandidate = res;
      console.log(this.currentCandidate);
      this.forms.patchValue(res);


    });
  }
  getClientStatuses(){
   
    this.candidatesService.getClientStatuses().subscribe(res => {
      this.clientStatuses = res

    })
  }

  getSkills(){
     this.candidatesService.getSkills().subscribe(res => {
      this.skills = res
     }) 
  }

ngOnInit(): void { 

 this.getCandidateById(this.activatedRoute.snapshot.params['id'])
 this.getClientStatuses()
 this.getSkills()
}


onClickcheckBox(data: any){
  const getId = this.forms.get('skillIds') as FormArray


  if(data.source.checked){
  getId.push(new FormControl(data.source.value))
  } else {
   getId.controls.forEach(
     (res : any)=> {
       if ( res.value === data.source.value){
         getId.removeAt(res)
       }
     })
  }
}


  submit() {
    console.log(this.forms.value);
    this.candidatesService.addCandidate(this.forms.value).subscribe((res) => {
      console.log(res);
    });
  }

}
