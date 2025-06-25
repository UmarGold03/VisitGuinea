import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-category-list',
  templateUrl: './site-category-list.component.html',
  styleUrl: './site-category-list.component.scss'
})
export class SiteCategoryListComponent implements OnInit{

   categorie: string = '';
  searchTerm: string = '';
  sites: any[] = [];

  allSites: any = {
    plages: [
      { name: 'Takonko Beach', image: 'assets/img/oumar1.jpg', description: 'Plage magnifique avec sable blanc.' },
      { name: 'Plage de Bel-Air', image: 'assets/img/belair.jpg', description: 'Spot idéal pour les couchers de soleil.' },
      { name: 'Plage Rogbane', image: 'assets/img/oumar1.jpg', description: 'Ambiance festive et détente.' },
      { name: 'Plage Benares', image: 'assets/img/benares1.jpg', description: 'Ambiance festive et détente.' }
    ],
    hotels: [
      { name: 'Riviera Hotel', image: 'assets/img/Riviera10.jpg', description: 'Hôtel de luxe avec vue sur mer.' },
      { name: 'Radisson Blu', image: 'assets/img/Radisson1.jpg', description: 'Hôtel de luxe avec vue sur mer.' },
      { name: 'Noom Hotel', image: 'assets/img/Noom1.jpg', description: 'Hôtel de luxe avec vue sur mer.' },
      { name: 'Onomo Hotel', image: 'assets/img/Onoma.jpg', description: 'Hôtel de luxe avec vue sur mer.' },
      { name: 'Palm Camayenne', image: 'assets/img/PalmCama.jpg', description: 'Hébergement moderne à Conakry.' }
    ],

    monts: [
      { name: 'Mont Loura', image: 'assets/img/z3.jpg', description: 'Montagne emblématique de Kindia.' },
      { name: 'Chutes Killisi', image: 'assets/img/kilissi.jpg', description: 'Montagne emblématique de Kindia.' },
      { name: 'Voile de la Mariee', image: 'assets/img/voile3.jpg', description: 'Montagne emblématique de Kindia.' },
      { name: 'Chutes de la Soumba', image: 'assets/img/soumba.jpg', description: 'Cascade spectaculaire au cœur de la forêt.' }
    ],

    centres: [
      { name: 'Prima Center', image: 'assets/img/Prima.jpg', description: 'Iles paradisiaques au large de Conakry.' },
       { name: 'Musee Nationale', image: 'assets/img/Musee.jpg', description: 'Iles paradisiaques au large de Conakry.' },
      { name: 'Jardin 2 Octobre', image: 'assets/img/Jardin5.jpg', description: 'Iles paradisiaques au large de Conakry.' }
    ],

    iles: [
      { name: 'Iles Loos', image: 'assets/img/Loos4.jpg', description: 'Iles paradisiaques au large de Conakry.' },
      { name: 'Samaya Lac ', image: 'assets/img/samayalac1.jpg', description: 'Iles paradisiaques au large de Conakry.' },
       { name: 'Iles Room', image: 'assets/img/mont1.jpg', description: 'Iles paradisiaques au large de Conakry.' },
      { name: 'Iles Tamara', image: 'assets/img/tamara.jpg', description: 'Iles paradisiaques au large de Conakry.' }
    ],

    religieux: [
      { name: 'Mosquée Fayçal', image: 'assets/img/Faycal2.jpg', description: 'Grande mosquée emblématique de Conakry.' },
       { name: 'Mosquée Turc', image: 'assets/img/MosqueTurc.jpg', description: 'Grande mosquée emblématique de Conakry.' },
      { name: 'Cathedrale Sainte Marie', image: 'assets/img/CathedraleSainteMarie.jpg', description: 'Grande mosquée emblématique de Conakry.' }
    ],
    loisirs: [
      { name: 'Boîte de Nuit XYZ', image: 'assets/img/mont1.jpg', description: 'Endroit branché pour danser et s’amuser.' },
      { name: 'Boîte de Nuit XYZ', image: 'assets/img/mont1.jpg', description: 'Endroit branché pour danser et s’amuser.' }
    ],
    restaurants: [
      { name: 'Le Gourmet', image: 'assets/img/mont1.jpg', description: 'Cuisine locale et internationale raffinée.' }
    ],
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.sites = this.allSites[this.categorie] || [];

    if (this.sites.length === 0) {
      this.router.navigate(['/categories']);
    }
  }

  goToDetails(site: any) {
    this.router.navigate(['/categories', this.categorie, site.name]);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }

  filteredSites() {
    if (!this.searchTerm.trim()) return this.sites;
    return this.sites.filter(site =>
      site.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

 getCategorieTitre(): string {
  const titres: any = {
    plages: 'Vos Plages',
    hotels: 'Vos Hôtels',
    monts: 'Vos Montagnes et Chutes',
    centres: 'Vos Centres Culturels',
    iles: 'Vos Îles',
    religieux: 'Vos Lieux Religieux',
    loisirs: 'Vos Loisirs',
    restaurants: 'Vos Restaurants'
  };

  return titres[this.categorie] || 'Sites Touristiques';
}


}
