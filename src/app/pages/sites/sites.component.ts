import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { isPlatformBrowser } from '@angular/common';


interface Category {
  id: string;
  name: string;
  description: string;
  type: string;
  image: string; // URL complète
  lien: string;  // name transformé pour route
}

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {

   categories: Category[] = [];
  searchQuery = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  selectedType = '';
  isLoading = true;
  errorMsg = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const data = await this.supabaseService.getCategories();
      this.categories = data;
    } catch (err) {
      console.error('Erreur chargement des catégories', err);
      this.errorMsg = 'Impossible de charger les catégories.';
    } finally {
      this.isLoading = false;
    }
  }

  uniqueTypes(): string[] {
    return [...new Set(this.categories.map(c => c.type))];
  }

  filteredCategories(): Category[] {
    const query = this.searchQuery.toLowerCase();
    let result = this.categories.filter(cat =>
      (cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query)) &&
      (this.selectedType === '' || cat.type === this.selectedType)
    );

    return this.sortOrder === 'asc'
      ? result.sort((a, b) => a.name.localeCompare(b.name))
      : result.sort((a, b) => b.name.localeCompare(a.name));
  }

  goToCategory(slug: string) {
    this.router.navigate(['/categories', slug]);
  }
}
