import { Component } from '@angular/core';
import { GetImgFirstService } from '../../services/get-img-first.service';
@Component({
  selector: 'app-card-principal',
  standalone: true,
  imports: [],
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.css'
})
export class CardPrincipalComponent {
  images: any[] = []

  constructor(private getImgFirstService: GetImgFirstService,) {}

  ngOnInit(){
    this.getImg();
  }

  getImg(){
    this.getImgFirstService.getImgFirst().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log('Error', error)
      }
    )
  }
}
