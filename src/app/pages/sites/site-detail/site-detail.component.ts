import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../../services/supabase.service';

interface Commentaire {
  author: string;
  content: string;
}

interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  localisation: string;
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
  siteSlug: string = '';
  siteData: Site | null = null;
  popularComments: Commentaire[] = [];
  newComment: Commentaire = {
    author: '',
    content: ''
  };
  isLoading = true;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.siteSlug = decodeURIComponent(this.route.snapshot.paramMap.get('site') || '');

    try {
      // Étape 1 : Récupération de toutes les catégories
      const categories = await this.supabaseService.getCategories();
      const matchedCategory = categories.find(cat =>
        cat.name.toLowerCase().replace(/\s+/g, '-') === this.categorie
      );

      if (!matchedCategory) {
        this.errorMsg = 'Catégorie introuvable.';
        this.router.navigate(['/categories']);
        return;
      }

      // Étape 2 : Récupérer tous les sites
      const allSites = await this.supabaseService.getSites();

      // Étape 3 : Trouver le site spécifique
      const found = allSites.find(site =>
        site.category_id === matchedCategory.id &&
        site.name.toLowerCase() === this.siteSlug.toLowerCase()
      );

      if (!found) {
        this.errorMsg = 'Site introuvable.';
        this.router.navigate(['/categories', this.categorie]);
        return;
      }

      // Étape 4 : Récupérer la galerie du site (optionnelle)
      const gallery = await this.supabaseService.getGalleryBySiteId(found.id);

      this.siteData = {
        id: found.id,
        name: found.name,
        image: found.image,
        description: found.description,
        price: found.price || 'Non spécifié',
        localisation: found.location || '#',
        comments: [], // à connecter plus tard avec Supabase table "reviews"
        galleryImages: gallery
      };

      // Étape 5 : Charger des commentaires simulés (à remplacer plus tard)
      this.popularComments = [
        { author: 'Fatou', content: 'Lieu magnifique !' },
        { author: 'Moussa', content: 'Très belle expérience.' }
      ];

    } catch (err) {
      console.error('Erreur chargement site détail :', err);
      this.errorMsg = 'Erreur lors du chargement du site.';
    } finally {
      this.isLoading = false;
      window.scrollTo(0, 0);
    }
  }

  goBack(): void {
    this.router.navigate(['/categories', this.categorie]);
  }

  addComment(): void {
    const authorTrimmed = this.newComment.author.trim();
    const contentTrimmed = this.newComment.content.trim();

    if (authorTrimmed && contentTrimmed) {
      this.popularComments.unshift({ author: authorTrimmed, content: contentTrimmed });
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
