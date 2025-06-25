import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Site {
  name: string;
  description: string;
  image: string;
  category: string;
  region: string;
}

@Component({
  selector: 'app-manage-sites',
  templateUrl: './manage-sites.component.html',
  styleUrl: './manage-sites.component.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class ManageSitesComponent {


 showForm = false;
  categories = ['plage', 'montagne', 'chute', 'historique'];
  regions = ['Basse Guinée', 'Moyenne Guinée', 'Haute Guinée', 'Guinée Forestière'];

  sites: Site[] = [
    { name: 'Chutes de la Sala', description: '...', image: 'assets/img/sala.jpg', category: 'chute', region: 'Guinée Forestière' },
    { name: 'Îles de Loos', description: '...', image: 'assets/img/loos.jpg', category: 'plage', region: 'Basse Guinée' },
    { name: 'Fouta Djallon', description: '...', image: 'assets/img/fouta.jpg', category: 'montagne', region: 'Moyenne Guinée' }
  ];

  newSite: Site = { name: '', description: '', image: '', category: '', region: '' };

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.newSite = { name: '', description: '', image: '', category: '', region: '' };
  }

  addSite() {
    // état simulé (later => Supabase)
    this.sites.unshift({...this.newSite});
    this.toggleForm();
  }

  deleteSite(site: Site) {
    this.sites = this.sites.filter(s => s !== site);
  }
}
