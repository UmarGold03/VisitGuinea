import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrl: './manage-events.component.scss',
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
export class ManageEventsComponent {

  fakeEvents = [
    {
      title: 'Festival des Arts de Conakry',
      date: '15 juillet 2025',
      location: 'Conakry',
      description: 'Un événement culturel réunissant des artistes guinéens.'
    },
    {
      title: 'Marathon de la Forêt',
      date: '25 août 2025',
      location: 'Nzérékoré',
      description: 'Course annuelle à travers la forêt guinéenne.'
    }
  ];
}
