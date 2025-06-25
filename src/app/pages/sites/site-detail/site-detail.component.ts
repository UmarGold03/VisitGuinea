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
  popularComments: any[] = [];

  newComment = {
    author: '',
    content: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  allSites: any = {
    plages: [
      {
        name: 'Capé Lagos',
        image: 'assets/img/oumar4.jpg',
        description: 'Une plage paradisiaque à Conakry.',
        price: '150,000 GNF',
        location: 'https://maps.google.com?q=Conakry+Guinea',
        comments: [
          { author: 'Fatou', content: 'Très beau site, j’ai adoré ma visite !' },
          { author: 'Moussa', content: 'Un endroit à ne pas rater en Guinée !' }
        ]
      },
      {
        name: 'Plage de Bel-Air',
        image: 'assets/img/oumar4.jpg',
        description: 'Plage parfaite pour les couchers de soleil.',
        price: '120,000 GNF',
        location: 'https://maps.google.com?q=BelAir+Guinea',
        comments: [
          { author: 'Alpha', content: 'J’y retourne chaque été !' }
        ]
      }
    ],
    monts: [
      {
        name: 'Mont Gangan',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    hotels: [
      {
        name: 'Riviera Hotel',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    centres: [
      {
        name: 'Prima Center',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    loisirs: [
      {
        name: 'Boîte de Nuit XYZ',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    religieux: [
      {
        name: 'Mont Gangan',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    iles: [
      {
        name: 'Iles Kassa',
        image: 'assets/img/mont1.jpg',
        description: 'La montagne emblématique de Kindia.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Mont+Gangan+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      }
    ],
    restaurants: [
      {
        name: 'Le Gourmet',
        image: 'assets/img/soumba.jpg',
        description: 'Un spectacle naturel impressionnant.',
        price: '100,000 GNF',
        location: 'https://maps.google.com?q=Soumba+Falls+Guinea',
        comments: [
          { author: 'Amadou', content: 'Magnifique lieu de détente !' }
        ]
      }
    ]
  };

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

    // Charger les commentaires spécifiques à ce site
    this.popularComments = this.siteData?.comments || [];

    // Remonter en haut de page au chargement
    window.scrollTo(0, 0);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    this.router.navigate(['/categories']);
  }

  addComment() {
    if (this.newComment.author.trim() && this.newComment.content.trim()) {
      this.popularComments.unshift({
        author: this.newComment.author,
        content: this.newComment.content
      });
      this.newComment = { author: '', content: '' };
    }
  }

  goToReservation() {
    this.router.navigate(['/reservation'], {
      queryParams: {
        nom: this.siteData.name,
        categorie: this.categorie,
        prix: this.siteData.price
      }
    });
  }
}
