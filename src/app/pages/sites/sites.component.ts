import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {

  categories = [
    {
      name: 'Plages',
      image: 'assets/img/oumar1.jpg',
      description: 'Découvrez les plus belles plages de Guinée.',
      lien: 'plage'
    },
    {
      name: 'Hôtels',
      image: 'assets/img/oumar02.jpg',
      description: 'Séjournez dans les meilleurs hôtels.',
      lien: 'hotel'
    },
    {
      name: 'Montagnes',
      image: 'assets/img/mont2.jpg',
      description: 'Explorez les montagnes comme le Mont Gangan.',
      lien: 'montagne'
    },
    {
      name: 'Chutes',
      image: 'assets/img/soumba2.jpg',
      description: 'Admirez les chutes impressionnantes du pays.',
      lien: 'chutes'
    }
  ];

  constructor(private router: Router) {}

  goToCategory(category: string) {
    this.router.navigate(['/categories', category]);

  }
}
