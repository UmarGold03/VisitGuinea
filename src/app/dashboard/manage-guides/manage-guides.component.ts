import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-manage-guides',
  templateUrl: './manage-guides.component.html',
  styleUrl: './manage-guides.component.scss',
  animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),
  trigger('slideDown', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
    ]),
  ]),
]

})
export class ManageGuidesComponent {

   fakeGuides = [
    {
      name: 'Ibrahima Diallo',
      region: 'Moyenne Guinée',
      bio: 'Guide expérimenté du Fouta avec 7 ans d’expérience.'
    },
    {
      name: 'Fatoumata Keita',
      region: 'Guinée Forestière',
      bio: 'Spécialiste de la culture forestière et traditions locales.'
    }
  ];
}
