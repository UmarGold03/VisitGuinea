import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // 📄 1. Récupérer les sites touristiques
  async getSites() {
    const { data, error } = await this.supabase
      .from('sites')
      .select('*');
    if (error) throw error;
    return data;
}

  // 📤 2. Uploader une image dans un bucket
  async uploadImage(bucket: string, path: string, file: File) {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(path, file, { upsert: true });
    if (error) throw error;
    return data;
  }
 // 🔗 3. Générer l'URL publique d'une image
  getPublicUrl(bucket: string, path: string): string {
    return this.supabase
      .storage
      .from(bucket)
      .getPublicUrl(path).data.publicUrl;
  }

  // 📥 4. Ajouter un site dans la DB
  async addSite(site: {
    name: string;
    description: string;
    image_url: string;
    price: number;
    location: string;
    category_id: string;
  }) {
    const { data, error } = await this.supabase
      .from('sites')
      .insert([site]);
    if (error) throw error;
    return data;
  }
}
