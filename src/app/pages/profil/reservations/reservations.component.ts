import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {

  displayedColumns: string[] = ['site', 'date', 'prix'];
  reservations = [
    { site: 'Capé Lagos', date: '2025-07-12', prix: '150 000 GNF' },
    { site: 'Mont Gangan', date: '2025-08-03', prix: '200 000 GNF' }
  ];
}
