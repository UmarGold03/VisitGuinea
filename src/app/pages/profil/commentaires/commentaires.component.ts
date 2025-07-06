import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ]
})
export class CommentairesComponent {

  commentaires = [
    { auteur: 'Fatou', texte: 'Magnifique expérience au Mont Gangan.' },
    { auteur: 'Moussa', texte: 'La plage de Bel-Air est incroyable !' }
  ];
}
