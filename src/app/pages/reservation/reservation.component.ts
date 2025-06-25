import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {


  nomSite: string = '';
  categorie: string = '';
  prix: string = '';

  reservationData = {
    nom: '',
    email: '',
    telephone: '',
    date: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.nomSite = this.route.snapshot.queryParamMap.get('nom') || '';
    this.categorie = this.route.snapshot.queryParamMap.get('categorie') || '';
    this.prix = this.route.snapshot.queryParamMap.get('prix') || '';
    window.scrollTo(0, 0);
  }

  envoyerReservation() {
    if (this.reservationData.nom && this.reservationData.email && this.reservationData.telephone && this.reservationData.date) {
      alert(`Réservation envoyée pour ${this.nomSite} !`);
      this.reservationData = { nom: '', email: '', telephone: '', date: '' };
      this.router.navigate(['/home']);
    }
  }
}
