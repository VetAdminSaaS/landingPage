import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { FooterComponent } from "../../shared/component/footer/footer.component";

@Component({
  selector: 'app-service-landing',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './service-landing.component.html',
  styleUrl: './service-landing.component.scss'
})
export class ServiceLandingComponent {

}
