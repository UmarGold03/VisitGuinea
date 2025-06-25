import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrl: './manage-events.component.scss'
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
