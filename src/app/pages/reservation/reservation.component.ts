import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; 

interface Reservation {
  nom: string;
  email: string;
  telephone: string;
  date: string;
  site: string;
  categorie: string;
  prix: string;
}


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

  // Simulation de base de données temporaire
  reservations: Reservation[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.nomSite = this.route.snapshot.queryParamMap.get('nom') || '';
    this.categorie = this.route.snapshot.queryParamMap.get('categorie') || '';
    this.prix = this.route.snapshot.queryParamMap.get('prix') || '';
    window.scrollTo(0, 0);
  }

  envoyerReservation() {
    if (
      this.reservationData.nom &&
      this.reservationData.email &&
      this.reservationData.telephone &&
      this.reservationData.date
    ) {
      const nouvelleReservation: Reservation = {
        ...this.reservationData,
        site: this.nomSite,
        categorie: this.categorie,
        prix: this.prix
      };

      // Simule l'enregistrement
      this.reservations.push(nouvelleReservation);

      // Snackbar de confirmation
      this.snackBar.open(
        `Réservation confirmée pour ${this.nomSite}`,
        'OK',
        { duration: 4000 }
      );

      // Reset
      this.reservationData = { nom: '', email: '', telephone: '', date: '' };

      // Redirection
      setTimeout(() => this.router.navigate(['/merci']), 1000);
    }
  }
}
