import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICandidate } from '../interfaces/icandidate';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl

  constructor( private http : HttpClient ) { }


  get<T>(url:string): Observable<T>{
    return this.http.get<T>(this.apiUrl + url)
  }

  
  post<T>(url:string, data : any): Observable<T>{
    return this.http.post<T>(this.apiUrl + url, data)
  }
  
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url)
   }


   put<T>(url: string, body?: ICandidate): Observable<T>{
    return this.http.put<T>(this.apiUrl+ url, body)
   
   }
}
