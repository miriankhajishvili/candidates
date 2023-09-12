import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ICandidate } from '../interfaces/icandidate';
import { IStatus } from '../interfaces/istatus';
import { ISkill } from '../interfaces/iskill';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService extends BaseService {

  addCandidate(data: any): Observable<ICandidate[]>{
    return this.post('candidates/',data)
    
  }

  getCandidates(): Observable<ICandidate[]>{
    return this.get('candidates')
  }
  
  getCandidateById(id: number): Observable<ICandidate> {
    return this.get(`candidates/${id}`)
    
  }

  getClientStatuses() : Observable<IStatus[]>{
    return this.get('client-statuses')

  }
  getSkills() : Observable<ISkill[]>{
    return this.get('skills')
  }

  updateCandidate(id : number , data : any): Observable<ICandidate>{
    return this.put(`candidates/${id}`, data)
  }

 deleteCandidate(id : string) : Observable<ICandidate>{
  return this.delete(`candidates/${id}`)
 }
}
