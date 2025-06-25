import { Component } from '@angular/core';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.scss'
})
export class CommentairesComponent {

  commentaires = [
    { auteur: 'Fatou', texte: 'Magnifique expérience au Mont Gangan.' },
    { auteur: 'Moussa', texte: 'La plage de Bel-Air est incroyable !' }
  ];
}
