import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Site {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-site-category-list',
  templateUrl: './site-category-list.component.html',
  styleUrl: './site-category-list.component.scss'
})
export class SiteCategoryListComponent implements OnInit{
 categorie = '';
  searchTerm = '';
  sites: Site[] = [];

  allSites: Record<string, Site[]> = {
    plages: [
      { name: 'Takonko Beach', image: 'assets/img/oumar1.jpg', description: 'Plage magnifique avec sable blanc.' },
      { name: 'Plage de Bel-Air', image: 'assets/img/belair.jpg', description: 'Spot idéal pour les couchers de soleil.' },
      { name: 'Plage Rogbane', image: 'assets/img/Eau.jpg', description: 'Ambiance festive et détente.' },
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
      { name: 'Chutes Killisi', image: 'assets/img/kilissi.jpg', description: 'Cascade superbe de Kindia.' },
      { name: 'Voile de la Mariée', image: 'assets/img/voile3.jpg', description: 'Cascade spectaculaire.' },
      { name: 'Chutes de la Soumba', image: 'assets/img/soumba.jpg', description: 'Cascade au cœur de la forêt.' }
    ],
    centres: [
      { name: 'Prima Center', image: 'assets/img/Prima.jpg', description: 'Centre moderne de loisirs.' },
      { name: 'Musée National', image: 'assets/img/Musee.jpg', description: 'Patrimoine culturel guinéen.' },
      { name: 'Jardin 2 Octobre', image: 'assets/img/Jardin5.jpg', description: 'Poumon vert au centre-ville.' }
    ],
    iles: [
      { name: 'Îles Loos', image: 'assets/img/Loos4.jpg', description: 'Iles paradisiaques au large de Conakry.' },
      { name: 'Lac Samaya', image: 'assets/img/samayalac1.jpg', description: 'Tranquillité et nature.' },
      { name: 'Îles Room', image: 'assets/img/mont1.jpg', description: 'Escapade insolite.' },
      { name: 'Îles Tamara', image: 'assets/img/tamara.jpg', description: 'Nature et détente.' }
    ],
    religieux: [
      { name: 'Mosquée Faycal', image: 'assets/img/Faycal2.jpg', description: 'Grande mosquée emblématique.' },
      { name: 'Mosquée Turc', image: 'assets/img/MosqueTurc.jpg', description: 'Architecture remarquable.' },
      { name: 'Cathédrale Sainte Marie', image: 'assets/img/CathedraleSainteMarie.jpg', description: 'Patrimoine religieux.' }
    ],
    loisirs: [
      { name: 'Boîte XYZ', image: 'assets/img/mont1.jpg', description: 'Endroit branché pour danser.' },
      { name: 'Espace détente', image: 'assets/img/mont1.jpg', description: 'Lieu convivial et festif.' }
    ],
    restaurants: [
      { name: 'Le Gourmet', image: 'assets/img/mont1.jpg', description: 'Cuisine locale et internationale raffinée.' }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('categorie') || '';
    this.sites = this.allSites[this.categorie] || [];

    if (!this.sites.length) {
      this.router.navigate(['/categories']);
    }
  }

  getCategorieTitre(): string {
    const titres: Record<string, string> = {
      plages: 'Plages',
      hotels: 'Hôtels',
      monts: 'Montagnes & Chutes',
      centres: 'Centres Culturels',
      iles: 'Îles',
      religieux: 'Lieux Religieux',
      loisirs: 'Loisirs',
      restaurants: 'Restaurants'
    };
    return titres[this.categorie] || 'Sites Touristiques';
  }

  filteredSites(): Site[] {
    if (!this.searchTerm.trim()) {
      return this.sites;
    }
    return this.sites.filter(site =>
      site.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetails(site: Site) {
    this.router.navigate(['/categories', this.categorie, site.name]);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }


}
