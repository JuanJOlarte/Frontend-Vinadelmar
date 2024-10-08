import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  private apiUrl = "http://18.191.243.95:4001/api"

  constructor(private http:HttpClient) { }

  delete(id :string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteProduct/${id}`)
  }
}
