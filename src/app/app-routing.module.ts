import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SitesComponent } from './pages/sites/sites.component';
import { SiteDetailComponent } from './pages/sites/site-detail/site-detail.component';
import { SiteCategoryListComponent } from './pages/sites/site-category-list/site-category-list.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { EventsComponent } from './pages/events/events.component';

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

  { path: 'categories', component: SitesComponent }, 
  { path: 'categories/:categorie', component: SiteCategoryListComponent }, 
  { path: 'categories/:categorie/:site', component: SiteDetailComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
