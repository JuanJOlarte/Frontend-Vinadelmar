import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CreateProductAdminService } from '../../services/create-product-admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  constructor (private createProduct: CreateProductAdminService){}

  name:string =''
  feature: boolean = false
  img: string = ''
  description: string = ''
  value: number = 0
  date:Date = new Date();

  onSubmit(form: NgForm){
    if(form.valid){
      this.createProduct.createProduct(form.value).subscribe(
        response => {
          console.log('Producto Creado Exitosamente',response)
          this.showSuccessAlert('Producto Creado Exitosamente')
        },
        error => {
          console.log('Error al crear el producto',error)
          this.showErrorAlert('Hubo un error al Crear el producto, intenta nuevamente')
        }
      );
    }else{
      console.warn('Formulario invalido, revisa los campos')
      this.showWarningAlert('Formulario invalido, completa los campos')
    }
  }
  showSuccessAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2500,
      backdrop: false
    });
  }

  showErrorAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 2500,
      backdrop: false
    });
  }

  showWarningAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: message,
      showConfirmButton: false,
      timer: 2500,
      backdrop: false
    });
  }
}
