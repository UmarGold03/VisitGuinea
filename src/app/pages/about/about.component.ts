import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

   teamMembers = [
    { name: 'Mamadou Hady', role: 'Développeur Frontend', image: 'Had.jpg' },
    { name: 'Gassim', role: 'Développeur Backend', image: 'Prefet.jpg' },
    { name: 'Alseny', role: 'UX/UI Designer', image: 'AC.jpg' },
    { name: 'Oumar Diop', role: 'Développeur Frontend', image: 'Diop.jpg' }
  ];
}
