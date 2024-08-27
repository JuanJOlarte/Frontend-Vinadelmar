import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReservService } from '../../services/reserv.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  constructor(private reservar:ReservService){
  }
  name:string = ''
  email:string = ''
  number:number =0
  date:Date = new Date();
  hour:  string = '';
  request: string=''

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.reservar.reserva(form.value).subscribe(
        response => {
          console.log('Reserva creada exitosamente:', response);
          this.showSuccessAlert('Reserva creada exitosamente!');
        },
        error => {
          console.error('Error al crear la reserva:', error);
          this.showErrorAlert('Hubo un error al crear la reserva. Por favor, intenta nuevamente.');
        }
      );
    } else {
      console.warn('Formulario inválido. Por favor revisa los campos.');
      this.showWarningAlert('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }

    form.reset();
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

