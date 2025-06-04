import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { FooterComponent } from "../../shared/component/footer/footer.component";

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export class PlanesComponent {

}
