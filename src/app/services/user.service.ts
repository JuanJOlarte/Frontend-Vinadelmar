import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:4001/api"
  constructor(private http : HttpClient) { }

  user(email: string, password: string) : Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, {email,password})
  }
}
