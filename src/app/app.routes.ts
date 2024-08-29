import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [

    {path:"", component: HomeComponent},
    {path:"reservaciones", component: FormularioComponent},
    {path:"conocenos", component: AboutComponent},
    {path:"servicios", component: CardServiceComponent},
    {path: "contactanos", component: FooterComponent},
    {path: "botton", component: FormularioComponent},
    {path: "menu", component: MenuComponent}
];


