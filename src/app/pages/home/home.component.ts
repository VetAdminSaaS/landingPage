import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { AboutComponent } from "../../shared/component/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
