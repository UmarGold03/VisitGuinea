import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../../services/supabase.service';

interface Site {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  image?: string;
  imageUrl?: string;
  category: string;
}

@Component({
  selector: 'app-site-category-list',
  templateUrl: './site-category-list.component.html',
  styleUrl: './site-category-list.component.scss'
})
export class SiteCategoryListComponent implements OnInit{
  categorieSlug = '';
  searchTerm = '';
  sites: any[] = [];
  isLoading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.categorieSlug = this.route.snapshot.paramMap.get('categorie') || '';
    console.log('Slug de catégorie :', this.categorieSlug);

    try {
      // 1. Récupère toutes les catégories
      const categories = await this.supabaseService.getCategories();
      const category = categories.find(cat =>
        cat.name.toLowerCase().replace(/\s+/g, '-') === this.categorieSlug
      );

      if (!category) {
        this.error = 'Catégorie introuvable.';
        return;
      }

      // 2. Charge tous les sites
      const allSites = await this.supabaseService.getSites();

      // 3. Filtre les sites selon category_id
      this.sites = allSites.filter(site => site.category_id === category.id);

      if (!this.sites.length) {
        this.error = 'Aucun site trouvé dans cette catégorie.';
      }

    } catch (err) {
      console.error('Erreur chargement sites :', err);
      this.error = 'Erreur lors du chargement des données.';
    } finally {
      this.isLoading = false;
    }
  }

  getCategorieTitre(): string {
    return this.categorieSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  filteredSites(): any[] {
    if (!this.searchTerm.trim()) return this.sites;
    return this.sites.filter(site =>
      site.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetails(site: any) {
    this.router.navigate(['/categories', this.categorieSlug, site.name]);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
