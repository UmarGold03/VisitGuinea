import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showMobileMenu = false;

  constructor(private router: Router) {
    // Fermer le menu quand on change de route
    this.router.events.subscribe(() => {
      this.showMobileMenu = false;
    });
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMenu() {
    this.showMobileMenu = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.showMobileMenu = false;
    }
  }
}
