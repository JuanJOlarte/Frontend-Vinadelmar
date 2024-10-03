import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetImgFirstService {
  private apiUrl = "http://18.191.243.95:4001/api"

  constructor(private http : HttpClient) { }

  getImgFirst(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllProduct`)
  }

}



