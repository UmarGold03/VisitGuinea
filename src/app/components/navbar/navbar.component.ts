import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
   animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NavbarComponent {

  showMobileMenu = false;
  isConnected = true;

  user = {
    name: 'Oumar Diop',
    avatarUrl: 'assets/img/Avat.png', // Lien vers une image PNG claire
  };

  constructor(private router: Router) {
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

  logout() {
    this.isConnected = false;
    this.user = { name: '', avatarUrl: '' };
    this.router.navigate(['/login']);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.showMobileMenu = false;
    }
  }
}
