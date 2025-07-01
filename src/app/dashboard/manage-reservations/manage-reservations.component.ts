import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Reservation {
  user: string;
  site: string;
  date: string;
  notes: string;
}

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrl: './manage-reservations.component.scss',
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
export class ManageReservationsComponent {

   reservations: Reservation[] = [
    { user: 'Aminata Sow', site: 'Îles de Loos', date: '2025-07-10', notes: '2 adultes, 1 enfant' },
    { user: 'Ibrahima Kaba', site: 'Fouta Djallon', date: '2025-08-05', notes: 'Randonnée 3 jours' }
  ];

}
