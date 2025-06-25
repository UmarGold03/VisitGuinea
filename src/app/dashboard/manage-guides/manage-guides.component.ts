import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-guides',
  templateUrl: './manage-guides.component.html',
  styleUrl: './manage-guides.component.scss'
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
