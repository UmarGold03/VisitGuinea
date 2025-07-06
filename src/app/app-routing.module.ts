import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SitesComponent } from './pages/sites/sites.component';
import { SiteDetailComponent } from './pages/sites/site-detail/site-detail.component';
import { SiteCategoryListComponent } from './pages/sites/site-category-list/site-category-list.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { EventsComponent } from './pages/events/events.component';
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
import { SimandouComponent } from './pages/simandou/simandou.component';
import { CountryComponent } from './pages/country/country.component';
import { GalleryComponent } from './pages/sites/gallery/gallery.component';
import { MerciComponent } from './merci/merci.component';

const routes: Routes = [
   { path: 'navbar', component: NavbarComponent },
   { path: 'login', component: LoginComponent },
   { path: 'about', component: AboutComponent },
   { path: 'sites', component: SitesComponent },
   { path: 'sites-category-list', component: SiteCategoryListComponent },
   { path: 'site_detail', component: SiteDetailComponent },
   { path: 'home', component: HomeComponent },
   { path: 'guides', component: GuidesComponent },
   { path: 'events', component: EventsComponent },
   { path: 'reservation', component: ReservationComponent },
   { path: 'simandou', component: SimandouComponent },
     { path: 'merci', component: MerciComponent },
   { path: 'country', component: CountryComponent },
   { path: 'categories/:categorie/:site/gallery', component: GalleryComponent },


  {
    path: 'profil',
    component: ProfilComponent,
    children: [
      { path: '', redirectTo: 'infos', pathMatch: 'full' },
      { path: 'infos', component: InfosComponent },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'commentaires', component: CommentairesComponent },
      { path: 'edition', component: EditionComponent }
    ]
  },
   {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home', component: DashboardHomeComponent },
      { path: 'sites', component: ManageSitesComponent },
      { path: 'events', component: ManageEventsComponent },
{ path: 'guides', component: ManageGuidesComponent },
{ path: 'reservations', component: ManageReservationsComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },


  { path: 'categories', component: SitesComponent }, 
  { path: 'categories/:categorie', component: SiteCategoryListComponent }, 
  { path: 'categories/:categorie/:site', component: SiteDetailComponent },
  

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     scrollPositionRestoration: 'enabled',
     anchorScrolling: 'enabled',
  scrollOffset: [0, 80]
  }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
