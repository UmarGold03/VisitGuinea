import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Commentaire {
  author: string;
  content: string;
}

interface Site {
  name: string;
  image: string;
  description: string;
  price: string;
  location: string;
  comments: Commentaire[];
  galleryImages?: string[];
}



@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrl: './site-detail.component.scss'
})

export class SiteDetailComponent implements OnInit{


  categorie: string = '';
  site: string = '';
  siteData: Site | null = null;
  popularComments: Commentaire[] = [];

  newComment: Commentaire = {
    author: '',
    content: ''
  };

  allSites: Record<string, Site[]> = {
    plages: [
      {
        name: 'Plage Benares',
        image: 'assets/img/benares1.jpg',
        description: 'Une plage paradisiaque à Conakry.',
        price: '150,000 GNF',
        location: 'https://maps.google.com?q=Conakry+Guinea',
        comments: [
          { author: 'Fatou', content: 'Très beau site, j’ai adoré ma visite !' },
          { author: 'Moussa', content: 'Un endroit à ne pas rater en Guinée !' }
        ]
      },
      {
        name: 'Takonko Beach',
        image: 'assets/img/Loos2.jpg',
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
        image: 'assets/img/belair2.jpg',
        description: 'Plage parfaite pour les couchers de soleil.',
        price: '120,000 GNF',
        location: 'https://maps.google.com?q=BelAir+Guinea',
        comments: [
          { author: 'Alpha', content: 'J’y retourne chaque été !' }
        ]
      },
      {
        name: 'Plage Rogbane',
        image: 'assets/img/Eau.jpg',
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
        image: 'assets/img/Riviera1.jpg',
        description: 'Hôtel confortable et bien situé.',
        price: '200,000 GNF',
        location: 'https://maps.google.com?q=Riviera+Hotel+Guinea',
        comments: [
          { author: 'Mariama', content: 'La vue est incroyable depuis le sommet.' }
        ]
      },
      {
        name: 'Radisson Blu',
        image: 'assets/img/Radisson5.jpg',
        description: 'Hôtel haut de gamme au cœur de la ville.',
        price: '300,000 GNF',
        location: 'https://maps.google.com?q=Radisson+Blu+Guinea',
        comments: [
          { author: 'Mariama', content: 'Super service et confort.' }
        ]
      },
      {
        name: 'Noom Hotel',
        image: 'assets/img/Noom.jpg',
        description: 'Hôtel moderne avec toutes commodités.',
        price: '180,000 GNF',
        location: 'https://maps.google.com?q=Noom+Hotel+Guinea',
        comments: [
          { author: 'Mariama', content: 'Très bon rapport qualité/prix.' }
        ]
      },
      {
        name: 'Onomo Hotel',
        image: 'assets/img/Onomo8.jpg',
        description: 'Hôtel apprécié des voyageurs d’affaires.',
        price: '220,000 GNF',
        location: 'https://maps.google.com?q=Onomo+Hotel+Guinea',
        comments: [
          { author: 'Mariama', content: 'Excellent emplacement.' }
        ]
      },
      {
        name: 'Palm Camayenne',
        image: 'assets/img/PalmCam.jpg',
        description: 'Hôtel de charme avec vue sur mer.',
        price: '250,000 GNF',
        location: 'https://maps.google.com?q=Palm+Camayenne+Guinea',
        comments: [
          { author: 'Mariama', content: 'Ambiance relaxante.' }
        ]
      }
    ],
    centres: [
      {
        name: 'Prima Center',
        image: 'assets/img/Prima.jpg',
        description: 'Centre commercial moderne à Conakry.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Prima+Center+Guinea',
        comments: [
          { author: 'Mariama', content: 'Beaucoup de boutiques intéressantes.' }
        ]
      },
      {
        name: 'Musée National',
        image: 'assets/img/Prima.jpg',
        description: 'Découvrez l’histoire et la culture guinéenne.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Musée+National+Guinea',
        comments: [
          { author: 'Mariama', content: 'Très enrichissant.' }
        ]
      },
      {
        name: 'Jardin 2 Octobre',
        image: 'assets/img/Prima.jpg',
        description: 'Un espace vert pour se détendre.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Jardin+2+Octobre+Guinea',
        comments: [
          { author: 'Mariama', content: 'Parfait pour une promenade en famille.' }
        ]
      }
    ],
    loisirs: [
      {
        name: 'Boîte de Nuit XYZ',
        image: 'assets/img/mont1.jpg',
        description: 'Ambiance festive et musique live.',
        price: 'Prix variable',
        location: 'https://maps.google.com?q=Boîte+de+Nuit+XYZ+Guinea',
        comments: [
          { author: 'Mariama', content: 'Super soirée garantie !' }
        ]
      }
    ],
    religieux: [
      {
        name: 'Mosquée Faycal',
        image: 'assets/img/Faycal2.jpg',
        description: 'Mosquée emblématique à Conakry.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Mosquée+Faycal+Guinea',
        galleryImages: [
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg'
        ],
        comments: [
          { author: 'Mariama', content: 'Lieu de paix et de recueillement.' }
        ]
      },
      {
        name: 'Mosquée Turc',
        image: 'assets/img/MosqueTurc.jpg',
        description: 'Architecture impressionnante.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Mosquée+Turc+Guinea',
        galleryImages: [
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg'
        ],
        comments: [
          { author: 'Mariama', content: 'Très bel édifice.' }
        ]
      },
      {
        name: 'Cathédrale Sainte Marie',
        image: 'assets/img/Cathedrale1.jpg',
        description: 'Cathédrale historique de Conakry.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Cathédrale+Sainte+Marie+Guinea',
        galleryImages: [
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg',
          'assets/img/benares1.jpg'
        ],
        comments: [
          { author: 'Mariama', content: 'Architecture magnifique.' }
        ]
      }
    ],
    iles: [
      {
        name: 'Îles Loos',
        image: 'assets/img/Loos2.jpg',
        description: 'Archipel paradisiaque proche de Conakry.',
        price: 'Visite à partir de 100,000 GNF',
        location: 'https://maps.google.com?q=Îles+Loos+Guinea',
        comments: [
          { author: 'Mariama', content: 'Un paradis pour les amoureux de la nature.' }
        ]
      },
      {
        name: 'Lac Samaya',
        image: 'assets/img/samayalac1.jpg',
        description: 'Lac paisible entouré de nature.',
        price: 'Entrée gratuite',
        location: 'https://maps.google.com?q=Lac+Samaya+Guinea',
        comments: [
          { author: 'Mariama', content: 'Endroit parfait pour la pêche.' }
        ]
      },
      {
        name: 'Îles Room',
        image: 'assets/img/VU.jpg',
        description: 'Un lieu secret pour les aventuriers.',
        price: 'Visite privée',
        location: 'https://maps.google.com?q=Îles+Room+Guinea',
        comments: [
          { author: 'Mariama', content: 'Très calme et isolé.' }
        ]
      },
      {
        name: 'Îles Tamara',
        image: 'assets/img/tamara.jpg',
        description: 'Île magnifique avec plages de sable blanc.',
        price: 'Visite guidée recommandée',
        location: 'https://maps.google.com?q=Îles+Tamara+Guinea',
        comments: [
          { author: 'Mariama', content: 'Superbe pour une escapade romantique.' }
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.site = this.route.snapshot.paramMap.get('site') || '';

    const categorySites = this.allSites[this.categorie];
    if (categorySites) {
      this.siteData = categorySites.find(
        (s: Site) => s.name.toLowerCase() === this.site.toLowerCase()
      ) || null;
    }

    if (!this.siteData) {
      this.router.navigate(['/categories']);
      return;
    }

    this.popularComments = [...(this.siteData.comments || [])];
    window.scrollTo(0, 0);
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  goBack(): void {
    this.router.navigate(['/categories', this.categorie]);
  }

  addComment(): void {
    const authorTrimmed = this.newComment.author.trim();
    const contentTrimmed = this.newComment.content.trim();

    if (authorTrimmed && contentTrimmed) {
      this.popularComments.unshift({
        author: authorTrimmed,
        content: contentTrimmed
      });

      this.newComment = { author: '', content: '' };
    }
  }

  goToReservation(): void {
    if (!this.siteData) return;

    this.router.navigate(['/reservation'], {
      queryParams: {
        nom: this.siteData.name,
        categorie: this.categorie,
        prix: this.siteData.price
      }
    });
  }

  downloadImage(imageUrl: string): void {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop() || 'image.jpg';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
