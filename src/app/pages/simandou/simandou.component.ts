import { Component } from '@angular/core';

@Component({
  selector: 'app-simandou',
  templateUrl: './simandou.component.html',
  styleUrl: './simandou.component.scss'
})
export class SimandouComponent {

sections = [
    {
      id: 'presentation',
      title: 'Le Projet Simandou',
      description:
        'Le projet Simandou est l’un des projets miniers et d’infrastructure les plus ambitieux d’Afrique. Il vise à exploiter le fer tout en favorisant le tourisme, la durabilité et le développement local.',
      image: 'assets/img/Siman.jpg',
    },
    {
      id: 'eco',
      title: 'Impact Économique',
      description:
        'Des milliers d’emplois créés, un essor local pour la Guinée et des partenariats internationaux. Simandou dynamise l’économie régionale.',
      image: 'assets/img/Sim.jpg',
    },
    {
      id: 'env',
      title: 'Respect de l\'Environnement',
      description:
        'Le projet Simandou adopte des normes strictes pour la protection de la faune, flore et des ressources naturelles.',
      image: 'assets/img/Sima.jpg',
    },
    {
      id: 'tourisme',
      title: 'Potentiel Touristique',
      description:
        'En plus de son volet industriel, Simandou est situé dans une région montagneuse splendide, riche en biodiversité et en culture locale.',
      image: 'assets/img/Simand.jpg',
    },
  ];

  videoUrl = 'https://www.youtube.com/embed/xyz123'; // Remplace par ton vrai lien YouTube
}
