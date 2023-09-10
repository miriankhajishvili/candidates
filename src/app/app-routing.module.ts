import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full'
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then(m=> m.CandidatesModule) 
   },
   {
    path: 'candidates/:id',
   loadChildren: () => import('./candidates-detail/candidates-detail.module').then(m => m.CandidatesDetailModule)
   },
   {
    path: 'add-candidates',
    loadChildren: () => import('./candidates-detail/candidates-detail.module').then(m => m.CandidatesDetailModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
