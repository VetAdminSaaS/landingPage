import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(public router: Router) {}
  

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  openLogin(): void {
    console.log('Abrir modal de login');
    if (this.isMenuOpen) this.toggleMenu();
    // this.router.navigate(['/login']); // Opcional: navegar a ruta de login
  }

  openSignup(): void {
    console.log('Abrir modal de registro');
    if (this.isMenuOpen) this.toggleMenu();
    // this.router.navigate(['/signup']); // Opcional: navegar a ruta de registro
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768 && this.isMenuOpen) {
      this.toggleMenu();
    }
  }

}
