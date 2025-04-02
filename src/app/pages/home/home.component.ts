import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { AboutComponent } from "../../shared/component/about/about.component";
import { BenefitsComponent } from "../../shared/component/benefits/benefits.component";
import { ContactComponent } from "../../shared/component/contact/contact.component";
import { TestimonialsComponent } from "../../shared/component/testimonials/testimonials.component";
import { FooterComponent } from "../../shared/component/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, BenefitsComponent, ContactComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
