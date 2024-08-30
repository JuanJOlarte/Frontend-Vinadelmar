import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, private route: Router){}

  email:string = ''
  password:string = ''

  login(){
    this.userService.user(this.email, this.password).subscribe(
      response =>{
        console.log('usuario logeado', response)
        this.showSuccessAlert(response.msg);
        this.route.navigate(['/menuAdmin'])
      },
      error =>  {
        console.error('Error al crear la reserva:', error);
          this.showErrorAlert("error al ingresar, datos incorrectos");
      }
    )
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
}
