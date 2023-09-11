import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormArray,FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from '../features/services/candidates.service';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.scss']
})
export class CandidatesDetailComponent implements OnInit {

  currentCandidate!: any;
  clientStatuses: any[] = [];
  skills: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidatesService: CandidatesService,
    private router: Router,
   
  ) {}

  forms: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    statusId: new FormControl('', Validators.required),
    skillIds: new FormArray([]),
  });

  getCandidateById(id: number) {
    return this.candidatesService.getCandidateById(id).subscribe((res) => {
      this.forms.patchValue(res);
      this.currentCandidate = res;
    });
  }

  getClientStatuses() {
    this.candidatesService.getClientStatuses().subscribe((res) => {
      this.clientStatuses = res;
    });
  }

  getSkills() {
    this.candidatesService.getSkills().subscribe((res) => {
      this.skills = res;

      // Initialize the FormArray controls based on skills
      const skillIdsFormArray = this.forms.get('skillIds') as FormArray;
      this.skills.forEach((skill) => {
        skillIdsFormArray.push(new FormControl(this.currentCandidate.skillIds.includes(skill.id)));
      });
    });
  }

  ngOnInit(): void {
    this.getCandidateById(this.activatedRoute.snapshot.params['id']);
    this.getClientStatuses();
    this.getSkills();
  }

  onClickcheckBox(skill: any, isChecked: boolean) {
    const skillIdsFormArray = this.forms.get('skillIds') as FormArray;
    const skillIndex = this.skills.findIndex((s) => s.id === skill.id);
  
    if (skillIndex !== -1) {
      skillIdsFormArray.at(skillIndex).setValue(isChecked);
    }
  }
  
  
  submit() {
    const skillIdsFormArray = this.forms.get('skillIds');
  
    if (skillIdsFormArray) {
      const selectedSkillIds = this.skills
        .filter((skill, index) => skillIdsFormArray.value[index] === true)
        .map((skill) => skill.id);
      
     
      const formValues = {
        name: this.forms.get('name')?.value,
        surname: this.forms.get('surname')?.value,
        email: this.forms.get('email')?.value,
        statusId: this.forms.get('statusId')?.value,
        skillIds: selectedSkillIds,
      };
    
      console.log(formValues);
    
      this.candidatesService.addCandidate(formValues).subscribe((res) => {
        console.log(res);
      });
    
      this.router.navigate(['/candidates']);
    } else {
      console.error('skillIds FormArray is null or undefined');
    }
  }
  
  
}
