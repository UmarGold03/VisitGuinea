import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
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
export class EventsComponent {

  events = [
    {
      title: 'Festival des Arts de Conakry',
      date: '2025-08-10',
      location: 'Conakry',
      image: 'assets/img/n1.jpg',
      description: 'Un festival culturel qui célèbre les arts traditionnels et modernes guinéens.'
    },
    {
      title: 'Randonnée au Mont Gangan',
      date: '2025-09-05',
      location: 'Kindia',
      image: 'assets/img/n1.jpg',
      description: 'Une excursion guidée vers l’un des plus beaux sommets de Guinée.'
    },
    {
      title: 'Randonnée au Mont Gangan',
      date: '2025-09-05',
      location: 'Kindia',
      image: 'assets/img/n1.jpg',
      description: 'Une excursion guidée vers l’un des plus beaux sommets de Guinée.'
    },
    {
      title: 'Randonnée au Mont Gangan',
      date: '2025-09-05',
      location: 'Kindia',
      image: 'assets/img/n1.jpg',
      description: 'Une excursion guidée vers l’un des plus beaux sommets de Guinée.'
    },
    {
      title: 'Randonnée au Mont Gangan',
      date: '2025-09-05',
      location: 'Kindia',
      image: 'assets/img/n1.jpg',
      description: 'Une excursion guidée vers l’un des plus beaux sommets de Guinée.'
    },
    {
      title: 'Salon du Tourisme de Guinée',
      date: '2025-07-15',
      location: 'Labé',
      image: 'assets/img/n1.jpg',
      description: 'Une rencontre entre acteurs du tourisme et les visiteurs pour découvrir les offres touristiques.'
    }
  ];
  
}
