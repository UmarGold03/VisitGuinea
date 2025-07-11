import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss',
   animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' })),
      ]),
    ]),
  ],
})
export class GuidesComponent {

   guides = [
    {
      name: 'Fatoumata Condé',
      region: 'Conakry',
      languages: ['Français', 'Soussou'],
      image: 'assets/img/Ann.png',
    },
    {
      name: 'Ibrahima Diallo',
      region: 'Mamou',
      languages: ['Français', 'Pular'],
      image: 'assets/img/Ann.png',
    },
    {
      name: 'Ousmane Keita',
      region: 'Kankan',
      languages: ['Français', 'Malinké'],
      image: 'assets/img/Ann.png',
    },
    {
      name: 'Daniel Tamba Millimono',
      region: 'Kindia',
      languages: ['Français', 'Kissi'],
      image: 'assets/img/Ann.png',
    },
  ];

  contacterGuide(guide: any) {
    alert(`Vous souhaitez contacter ${guide.name}. Cette fonctionnalité sera bientôt disponible.`);
  }
}
