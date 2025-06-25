import { Component } from '@angular/core';

interface Reservation {
  user: string;
  site: string;
  date: string;
  notes: string;
}

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrl: './manage-reservations.component.scss'
})
export class ManageReservationsComponent {

   reservations: Reservation[] = [
    { user: 'Aminata Sow', site: 'Îles de Loos', date: '2025-07-10', notes: '2 adultes, 1 enfant' },
    { user: 'Ibrahima Kaba', site: 'Fouta Djallon', date: '2025-08-05', notes: 'Randonnée 3 jours' }
  ];

}
