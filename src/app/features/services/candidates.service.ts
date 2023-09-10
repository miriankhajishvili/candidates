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

  updateCandidate(id : number , data : any): Observable<any>{
    return this.put<any>(`candidates/${id}`, data)
  }

 deleteCandidate(id : number) : Observable<any>{
  return this.delete<any>(`candidates/${id}`)
 }
}
