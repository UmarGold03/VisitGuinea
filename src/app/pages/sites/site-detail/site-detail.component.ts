import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrl: './site-detail.component.scss'
})
export class SiteDetailComponent implements OnInit{

  categorie: string = '';
  site: string = '';
  siteData: any = null;

  allSites: any = {
    plage: [
      {
        name: 'Capé Lagos',
        image: 'assets/img/oumar4.jpg',
        description: 'Une plage paradisiaque à Conakry.',
        price: '150,000 GNF',
        location: 'https://maps.google.com?q=Conakry+Guinea'
      },
      {
        name: 'Plage de Bel-Air',
        image: 'assets/img/oumar1.jpg',
        description: 'Une plage paradisiaque à Conakry.',
        price: '150,000 GNF',
        location: 'https://maps.google.com?q=Conakry+Guinea'
      }
    ],
    montagne: [
      {
        name: 'Mont Gangan',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea'
      }
    ],
    hotel: [
      {
        name: 'Riviera Hotel',
        image: 'assets/img/oumar02.jpg',
        description: 'Hôtel de luxe en bord de mer.',
        price: '500,000 GNF / nuit',
        location: 'https://maps.google.com?q=Riviera+Hotel+Guinea'
      },
      {
        name: 'Palm Suites',
        image: 'assets/img/oumar01.jpg',
        description: 'Hôtel de luxe en bord de mer.',
        price: '500,000 GNF / nuit',
        location: 'https://maps.google.com?q=Riviera+Hotel+Guinea'
      }
    ],
    chutes: [
      {
        name: 'Chutes de la Soumba',
        image: 'assets/img/soumba.jpg',
        description: 'Un spectacle naturel impressionnant.',
        price: '100,000 GNF',
        location: 'https://maps.google.com?q=Soumba+Falls+Guinea'
      }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.site = this.route.snapshot.paramMap.get('site') || '';

    const categorySites = this.allSites[this.categorie];
    if (categorySites) {
      this.siteData = categorySites.find(
        (s: any) => s.name.toLowerCase() === this.site.toLowerCase()
      );
    }

    if (!this.siteData) {
      this.router.navigate(['/categories']);
    }

  }

  getInitials(name: string): string {
    const parts = name.split(' ');
    let initials = parts[0].charAt(0);
    if (parts.length > 1) initials += parts[1].charAt(0);
    return initials.toUpperCase();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
