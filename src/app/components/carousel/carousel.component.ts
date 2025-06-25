import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
slides = [
    {
      image: 'assets/img/Loos4.jpg',
      title: 'Évadez-vous sur nos îles paradisiaques',
      description: 'Découvrez les plages isolées et les eaux cristallines de nos magnifiques îles.',
      buttonText: 'Explorer'
    },
    {
      image: 'assets/img/z22.jpg',
      title: 'Profitez des plages dorées de Guinée',
      description: 'Vivez des moments de détente sur les rivages ensoleillés de la Basse Guinée.',
      buttonText: 'Explorer'
    },
    {
      image: 'assets/img/tabounacascade.jpg',
      title: 'Admirez la puissance des chutes d\'eau',
      description: 'Explorez les cascades impressionnantes au cœur de la Guinée Forestière.',
      buttonText: 'Explorer'
    },
    {
      image: 'assets/img/z10.jpg',
      title: 'Vibrez au rythme du sport local',
      description: 'Assistez aux matchs passionnants dans nos stades modernes.',
      buttonText: 'Explorer'
    },
    {
      image: 'assets/img/Radisson1.jpg',
      title: 'Séjournez dans des hôtels de qualité',
      description: 'Découvrez un confort optimal dans nos établissements sélectionnés.',
      buttonText: 'Explorer'
    }
  ];
}
