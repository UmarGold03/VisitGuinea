import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInStagger', [
      transition(':enter', [
        query(':self', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(120, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent {
 teamMembers = [
    { name: 'Mamadou Hady', role: 'Développeur Frontend', image: 'Had.jpg' },
    { name: 'Gassim', role: 'Développeur Backend', image: 'Prefet.jpg' },
    { name: 'Alseny', role: 'UX/UI Designer', image: 'AC.jpg' },
    { name: 'Oumar Diop', role: 'Développeur Frontend', image: 'Diop.jpg' }
  ];
}
