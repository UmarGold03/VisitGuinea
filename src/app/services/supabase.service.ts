import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase!: SupabaseClient;
  private isBrowser: boolean;

  // Buckets Supabase
  private SITE_BUCKET = 'site-images';
  private CATEGORY_BUCKET = 'category-images';
  private EVENT_BUCKET = 'event-images';

  // Tables Supabase
  private SITES_TABLE = 'sites';
  private CATEGORIES_TABLE = 'categories';
  private EVENTS_TABLE = 'events';
  private SITE_GALLERY_TABLE = 'site_gallery';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }
  }

  getClient(): SupabaseClient | null {
    return this.isBrowser ? this.supabase : null;
  }

  // ✅ Récupérer toutes les catégories
  async getCategories(): Promise<any[]> {
    if (!this.isBrowser) return [];

    const { data, error } = await this.supabase
      .from(this.CATEGORIES_TABLE)
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Erreur chargement catégories :', error.message);
      return [];
    }

    return data.map(cat => ({
      ...cat,
      image: cat.image_url
        ? this.getPublicUrl(this.CATEGORY_BUCKET, cat.image_url)
        : 'assets/img/default-category.jpg',
      lien: cat.name?.toLowerCase().replace(/\s+/g, '-')
    }));
  }

  // ✅ Récupérer tous les sites
  async getSites(): Promise<any[]> {
    if (!this.isBrowser) return [];

    const { data, error } = await this.supabase
      .from(this.SITES_TABLE)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur chargement sites :', error.message);
      return [];
    }

    return data.map(site => ({
      ...site,
      image: site.image_url
        ? this.getPublicUrl(this.SITE_BUCKET, site.image_url)
        : 'assets/img/default-site.jpg',
    }));
  }

  // ✅ Récupérer les sites d'une catégorie spécifique
  async getSitesByCategory(categorieSlug: string): Promise<any[]> {
    if (!this.isBrowser) return [];

    const { data: categories } = await this.supabase
      .from(this.CATEGORIES_TABLE)
      .select('id, name');

    const match = categories?.find(
      cat => cat.name.toLowerCase().replace(/\s+/g, '-') === categorieSlug
    );

    if (!match) return [];

    const { data, error } = await this.supabase
      .from(this.SITES_TABLE)
      .select('*')
      .eq('category_id', match.id);

    if (error) {
      console.error('Erreur chargement sites par catégorie :', error.message);
      return [];
    }

    return data.map(site => ({
      ...site,
      image: site.image_url
        ? this.getPublicUrl(this.SITE_BUCKET, site.image_url)
        : 'assets/img/default-site.jpg',
    }));
  }

  // ✅ Récupérer les événements
  async getEvents(): Promise<any[]> {
    if (!this.isBrowser) return [];

    const { data, error } = await this.supabase
      .from(this.EVENTS_TABLE)
      .select('*')
      .order('event_date', { ascending: false });

    if (error) {
      console.error('Erreur chargement events :', error.message);
      return [];
    }

    return data.map(event => ({
      ...event,
      image: event.image_url
        ? this.getPublicUrl(this.EVENT_BUCKET, event.image_url)
        : 'assets/img/default-event.jpg',
    }));
  }

  // ✅ Récupérer les images de galerie d’un site
  async getGalleryBySiteId(siteId: string): Promise<string[]> {
    if (!this.isBrowser) return [];

    const { data, error } = await this.supabase
      .from(this.SITE_GALLERY_TABLE)
      .select('image_url')
      .eq('site_id', siteId);

    if (error) {
      console.error('Erreur chargement galerie :', error.message);
      return [];
    }

    return data.map(img => this.getPublicUrl(this.SITE_BUCKET, img.image_url));
  }

  // ✅ Upload d'image vers un bucket donné
  async uploadImage(bucket: string, file: File): Promise<string | null> {
    if (!this.isBrowser) return null;

    const filePath = `${Date.now()}_${file.name}`;
    const { error } = await this.supabase.storage.from(bucket).upload(filePath, file);

    if (error) {
      console.error('Erreur upload image :', error.message);
      return null;
    }

    return filePath;
  }

  // ✅ Obtenir l’URL publique d’un fichier
  getPublicUrl(bucket: string, path: string): string {
    if (!this.isBrowser || !path) return 'assets/img/image-not-found.jpg';

    const { data } = this.supabase.storage.from(bucket).getPublicUrl(path);
    return data?.publicUrl || 'assets/img/image-not-found.jpg';
  }
}
