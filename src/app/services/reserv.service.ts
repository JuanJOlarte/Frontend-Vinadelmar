import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservService {
  private api= "http://18.191.243.95:4001/api/createReserve"
  constructor(private http: HttpClient) { }
  
  reserva(data:any): Observable<any>{
    return this.http.post(this.api, data)
  }
}
