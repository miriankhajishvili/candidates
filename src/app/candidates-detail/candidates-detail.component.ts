import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from '../features/services/candidates.service';

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
    return this.candidatesService.getCandidateById(id).subscribe((res) => {
      this.forms.patchValue(res);
      this.currentCandidate = res;
  
      // Loop through the skills and update the checkbox states
      this.skills.forEach((skill) => {
        if (this.currentCandidate.skillIds.includes(skill.id)) {
          skill.checked = true;
        }
      });
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
    this.getCandidateById(this.activatedRoute.snapshot.params['id']);
    this.getClientStatuses();
    this.getSkills();
  
    // Check the checkboxes based on skillIds from currentCandidate
    this.forms.get('skillIds')?.valueChanges.subscribe((value) => {
      if (this.currentCandidate) {
        this.skills.forEach((skill) => {
          const isChecked = value.includes(skill.id);
          if (isChecked) {
            skill.checked = true;
          } else {
            skill.checked = false;
          }
        });
      }
    });
  }
  


onClickcheckBox(data: any){
  const getId = this.forms.get('skillIds') as FormArray

  console.log(getId.value)


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


submit(){
  console.log(this.forms.value)

  this.candidatesService.addCandidate(this.forms.value).subscribe(res => {
    console.log(res)
  })
  
  
}

}
