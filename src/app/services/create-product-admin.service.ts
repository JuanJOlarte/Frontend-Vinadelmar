import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProductAdminService {
    private apiUrl = "http://18.191.243.95:4001/api/createProduct"

  constructor( private http : HttpClient) { }

  createProduct(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data)
  }
}
