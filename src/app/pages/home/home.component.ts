import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { AboutComponent } from "../../shared/component/about/about.component";
import { BenefitsComponent } from "../../shared/component/benefits/benefits.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, BenefitsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
