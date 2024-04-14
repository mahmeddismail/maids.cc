import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  userData():Observable<any>{
    return this.http.get(`https://reqres.in/api/users`)
  }
  userDetailsData(id:string|null):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
