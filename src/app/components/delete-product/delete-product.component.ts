import { Component } from '@angular/core';
import { DeleteProductService } from '../../services/delete-product.service';
import { CommonModule } from '@angular/common';
import { GetImgFirstService } from '../../services/get-img-first.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  images: any
  
  constructor(private getImgFirstService: GetImgFirstService, private deleteProd: DeleteProductService){}

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

  delProd(id :string){
    this.deleteProd.delete(id).subscribe(
      response =>{
        console.log(response)
        this.images = response.products
        window.location.reload();
      },
      error =>{
        console.log('Error', error)
      }
    )
  }
}
