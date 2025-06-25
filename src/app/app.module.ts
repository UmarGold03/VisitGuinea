import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SitesComponent } from './pages/sites/sites.component';
import { SiteDetailComponent } from './pages/sites/site-detail/site-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { CountryComponent } from './pages/country/country.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SiteCategoryListComponent } from './pages/sites/site-category-list/site-category-list.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { EventsComponent } from './pages/events/events.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { InfosComponent } from './pages/profil/infos/infos.component';
import { ReservationsComponent } from './pages/profil/reservations/reservations.component';
import { CommentairesComponent } from './pages/profil/commentaires/commentaires.component';
import { EditionComponent } from './pages/profil/edition/edition.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { ManageSitesComponent } from './dashboard/manage-sites/manage-sites.component';
import { ManageEventsComponent } from './dashboard/manage-events/manage-events.component';
import { ManageGuidesComponent } from './dashboard/manage-guides/manage-guides.component';
import { ManageReservationsComponent } from './dashboard/manage-reservations/manage-reservations.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SitesComponent,
    SiteDetailComponent,
    AboutComponent,
    CountryComponent,
    ReviewsComponent,
    SiteCategoryListComponent,
    GuidesComponent,
    EventsComponent,
    ReservationComponent,
    ProfilComponent,
    InfosComponent,
    ReservationsComponent,
    CommentairesComponent,
    EditionComponent,
    DashboardLayoutComponent,
    DashboardNavbarComponent,
    DashboardHomeComponent,
    ManageSitesComponent,
    ManageEventsComponent,
    ManageGuidesComponent,
    ManageReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatToolbarModule, 
    MatLabel, FormsModule, MatSelectModule, MatTableModule,
     MatInputModule, MatGridListModule, MatTabsModule,
    MatIconModule, MatMenuModule,
     MatSlideToggleModule, MatCardModule,
      MatFormFieldModule, MatListModule ,MatSidenavModule, 
      MatDividerModule, MatSidenavModule,   MatDatepickerModule,
    MatNativeDateModule,  MatPaginatorModule,
  MatSortModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
