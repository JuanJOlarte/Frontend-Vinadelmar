import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardPrincipalComponent } from '../card-principal/card-principal.component';
import { AboutComponent } from '../about/about.component';
import { CardServiceComponent } from '../card-service/card-service.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardPrincipalComponent,AboutComponent, CardServiceComponent, BannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
