import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {path:"", component: HomeComponent},
    {path:"reservaciones", component: FormularioComponent}
];


