import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { AboutComponent } from "../../shared/component/about/about.component";
import { BenefitsComponent } from "../../shared/component/benefits/benefits.component";
import { ContactComponent } from "../../shared/component/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, BenefitsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
