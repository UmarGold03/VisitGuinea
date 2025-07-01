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
      title: 'Fête du 2 Octobre – Fête Nationale',
      date: new Date('2025-10-02'),
      location: 'Conakry',
      image: 'assets/img/fete.jpg',
      description: 'Célébration de l’indépendance avec concerts, défilés et spectacles partout en Guinée.'
    },
    {
      title: 'Festival des Arts de Conakry',
      date: new Date('2025-08-10'),
      location: 'Conakry',
      image: 'assets/img/n1.jpg',
      description: 'Un festival culturel qui célèbre les arts traditionnels et modernes guinéens.'
    },
    {
      title: 'Match Amical Guinée vs Sénégal',
      date: new Date('2025-09-15'),
      location: 'Stade Général Lansana Conté',
      image: 'assets/img/foot.jpg',
      description: 'Un événement sportif passionnant entre deux grandes équipes africaines.'
    },
    {
      title: 'Forum du Tourisme Durable',
      date: new Date('2025-11-20'),
      location: 'Kindia',
      image: 'assets/img/forum.jpg',
      description: 'Échanges et solutions pour un tourisme plus écoresponsable et local.'
    },
    {
      title: 'Concert de Takana Zion',
      date: new Date('2025-08-20'),
      location: 'Conakry – Stade du 28 septembre',
      image: 'assets/img/concert.jpg',
      description: 'Grand concert reggae de l’un des artistes les plus populaires de Guinée.'
    },
    {
      title: 'Salon du Tourisme de Guinée',
      date: new Date('2025-07-15'),
      location: 'Labé',
      image: 'assets/img/forum.jpg',
      description: 'Rencontre entre les acteurs du tourisme et les visiteurs pour découvrir les offres touristiques.'
    }
  ];
}
