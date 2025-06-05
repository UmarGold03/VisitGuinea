import { Component } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss'
})
export class GuidesComponent {

   guides = [
    {
      name: 'Fatoumata Condé',
      region: 'Conakry',
      languages: ['Français', 'Soussou'],
      image: 'assets/img/Diop.jpg'
    },
    {
      name: 'Ibrahima Diallo',
      region: 'Mamou',
      languages: ['Français', 'Pular'],
      image: 'assets/img/Diop.jpg'
    },
    {
      name: 'Ousmane Keita',
      region: 'Kankan',
      languages: ['Français', 'Malinké'],
      image: 'assets/img/Diop.jpg'
    },
    {
      name: 'Aminata Touré',
      region: 'Kindia',
      languages: ['Français', 'Soussou'],
      image: 'assets/img/Diop.jpg'
    }
  ];
}
