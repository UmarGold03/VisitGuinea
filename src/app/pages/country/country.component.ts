import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
   animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class CountryComponent {
  regions = [
    { nom: 'Basse Guinée', description: 'Région côtière avec plages et la capitale Conakry.' },
    { nom: 'Moyenne Guinée', description: 'Hauts plateaux, climat tempéré, zone de production agricole.' },
    { nom: 'Haute Guinée', description: 'Zone sahélienne avec des richesses minières.' },
    { nom: 'Guinée Forestière', description: 'Région très verte, riche en biodiversité.' },
  ];

  presidents = [
    {
      nom: 'Ahmed Sékou Touré',
      mandat: '1958 - 1984',
      photo: 'assets/img/Mandd.jpg',
      description: 'Premier président de la Guinée indépendante.',
    },
    {
      nom: 'Lansana Conté',
      mandat: '1984 - 2008',
      photo: 'assets/img/Mandjou.jpg',
      description: 'Transition militaire puis civile pendant deux décennies.',
    },
    {
      nom: 'Capitaine Moussa Dadis Camara',
      mandat: '2008 - 2010',
      photo: 'assets/img/koro.jpg',
      description: 'Chef de la junte militaire entre 2008 et 2010.',
    },
    {
      nom: 'Sekouba Kouyaté',
      mandat: 'Président du Parlement',
      photo: 'assets/img/koro.jpg',
      description: 'Personnalité politique importante en Guinée.',
    },
    {
      nom: 'Alpha Condé',
      mandat: '2010 - 2021',
      photo: 'assets/img/koro.jpg',
      description: 'Premier président élu démocratiquement.',
    },
    {
      nom: 'Mamady Doumbouya',
      mandat: '2021 - Présent',
      photo: 'assets/img/jordan.jpg',
      description: 'Actuel président de la transition.',
    },
  ];

  infos = [
    'Capitale : Conakry',
    'Population : ~13 millions',
    'Langue officielle : Français',
    'Monnaie : Franc Guinéen (GNF)',
    'Superficie : 245 857 km²',
    'Climat : Tropical',
    'Économie : Mines, agriculture, services',
  ];
  
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
