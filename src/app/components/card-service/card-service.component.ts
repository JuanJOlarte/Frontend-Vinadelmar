import { Component } from '@angular/core';
import { GetImgFirstService } from '../../services/get-img-first.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  dates: any

  constructor(private getImgFirstService: GetImgFirstService){}

  getData() {
    this.getImgFirstService.getImgFirst().subscribe(
      response =>{
        console.log(response.products)
        this.dates = response.products
      },
      error => {
        console.log('Error', error)
      }
    )
  }
}


