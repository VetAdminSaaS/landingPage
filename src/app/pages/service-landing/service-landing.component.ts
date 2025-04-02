import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";

@Component({
  selector: 'app-service-landing',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './service-landing.component.html',
  styleUrl: './service-landing.component.scss'
})
export class ServiceLandingComponent {

}
