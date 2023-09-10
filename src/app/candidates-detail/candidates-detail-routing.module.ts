import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesDetailComponent } from './candidates-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatesDetailComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesDetailRoutingModule { }
