import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {

searchQuery: string = '';
  sortOrder: string = 'asc';
  selectedType: string = '';

 categories = [
    {
      name: 'Plages',
      image: 'assets/img/benares1.jpg',
      description: 'Découvrez les plus belles plages de Guinée, idéales pour la détente.',
      lien: 'plages',
      type: 'Nature'
    },
    {
      name: 'Hôtels',
      image: 'assets/img/Noom1.jpg',
      description: 'Séjournez dans les meilleurs hôtels avec confort.',
      lien: 'hotels',
      type: 'Hébergement'
    },
    {
      name: 'Monts et Chutes',
      image: 'assets/img/Loos10.jpg',
      description: 'Explorez les monts majestueux et les cascades.',
      lien: 'monts',
      type: 'Nature'
    },
    {
      name: 'Centres Culturels',
      image: 'assets/img/Jardin5.jpg',
      description: 'Immergez-vous dans la richesse culturelle de la Guinée.',
      lien: 'centres',
      type: 'Culture'
    },
    {
      name: 'Îles & Parcs Naturels',
      image: 'assets/img/Loos8.jpg',
      description: 'Découvrez les îles paisibles et les réserves naturelles.',
      lien: 'iles',
      type: 'Nature'
    },
    {
      name: 'Lieux Religieux & Historiques',
      image: 'assets/img/Faycal.jpg',
      description: 'Visitez les sites historiques et religieux du pays.',
      lien: 'religieux',
      type: 'Culture'
    },
    {
      name: 'Loisirs et Sorties',
      image: 'assets/img/Onomo.jpg',
      description: 'Boîtes de nuit, bars, espaces de détente.',
      lien: 'loisirs',
      type: 'Loisirs'
    },
    {
      name: 'Restaurants & Gastronomie',
      image: 'assets/img/Onomo10.jpg',
      description: 'Savourez la gastronomie guinéenne.',
      lien: 'restaurants',
      type: 'Gastronomie'
    }
  ];


  constructor(private router: Router) {}

  goToCategory(category: string) {
    this.router.navigate(['/categories', category]);
  }

  uniqueTypes(): string[] {
    return [...new Set(this.categories.map(c => c.type))];
  }

  filteredCategories() {
    let query = this.searchQuery.toLowerCase();

    let filtered = this.categories.filter(cat =>
      (cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query)) &&
      (this.selectedType === '' || cat.type === this.selectedType)
    );

    return this.sortOrder === 'asc'
      ? filtered.sort((a, b) => a.name.localeCompare(b.name))
      : filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

}
