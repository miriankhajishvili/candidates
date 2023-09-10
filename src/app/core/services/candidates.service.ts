import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService extends BaseService {

  addCandidate(data: any,): Observable<any>{
    return this.post<any>('candidates/',data)
  }

  getCandidates(): Observable<any>{
    return this.get<any>('candidates')
  }
  
  getCandidateById(id: number): Observable<any> {
    return this.get<any>(`candidates/${id}`)
    
  }

  getClientStatuses() : Observable<any>{
    return this.get<any>('client-statuses')
  }
  getSkills() : Observable<any>{
    return this.get<any>('skills')
  }

 deleteCandidate(id : number) : Observable<any>{
  return this.delete<any>(`candidates/${id}`)
 }
}
