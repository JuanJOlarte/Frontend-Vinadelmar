import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardPrincipalComponent } from './components/card-principal/card-principal.component'
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent ,CardPrincipalComponent,AboutComponent, CardServiceComponent, BannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-Vinadelmar';
}
