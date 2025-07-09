import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent  implements OnInit{
 sites: any[] = [];
 
   constructor(private supabaseService: SupabaseService) {}
 
   async ngOnInit() {
     try {
       this.sites = await this.supabaseService.getSites();
     } catch (error) {
       console.error('Erreur chargement sites :', error);
     }
   }
 
}
