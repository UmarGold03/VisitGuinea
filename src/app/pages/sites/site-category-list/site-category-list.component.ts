import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-category-list',
  templateUrl: './site-category-list.component.html',
  styleUrl: './site-category-list.component.scss'
})
export class SiteCategoryListComponent implements OnInit{

  categorie: string = '';
  sites: any[] = [];

  allSites: any = {
    plage: [
      {
        name: 'Capé Lagos',
        image: 'assets/img/oumar1.jpg',
        description: 'Plage magnifique avec sable blanc.'
      },
      {
        name: 'Plage de Bel-Air',
        image: 'assets/img/oumar4.jpg',
        description: 'Spot idéal pour les couchers de soleil.'
      }
    ],
    hotel: [
      {
        name: 'Riviera Hotel',
        image: 'assets/img/oumar02.jpg',
        description: 'Hôtel de luxe avec vue sur mer.'
      },
      {
        name: 'Palm Suites',
        image: 'assets/img/oumar01.jpg',
        description: 'Hébergement moderne à Conakry.'
      }
    ],
    montagne: [
      {
        name: 'Mont Gangan',
        image: 'assets/img/mont1.jpg',
        description: 'Montagne emblématique de Kindia.'
      }
    ],
    chutes: [
      {
        name: 'Chutes de la Soumba',
        image: 'assets/img/soumba.jpg',
        description: 'Cascade spectaculaire au cœur de la forêt.'
      }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.sites = this.allSites[this.categorie] || [];

    if (this.sites.length === 0) {
      this.router.navigate(['/categories']); // Gestion d'erreur simple
    }
  }

  goToDetails(site: any) {
    this.router.navigate(['/categories', this.categorie, site.name]);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
