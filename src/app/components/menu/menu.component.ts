import { Component } from '@angular/core';
import { GetImgFirstService } from '../../services/get-img-first.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  images: any

  constructor(private getImgFirstService: GetImgFirstService,) {}

  ngOnInit(){
    this.getImg();
  }

  getImg(){
    this.getImgFirstService.getImgFirst().subscribe(
      response => {
        console.log(response.products)
        this.images = response.products
      },
      error => {
        console.log('Error', error)
      }
    )
  }
}

