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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    DashboardComponent,
    SiteCategoryListComponent,
    GuidesComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatToolbarModule, 
    MatLabel, FormsModule, MatSelectModule,
     MatInputModule, MatGridListModule,
    MatIconModule, MatMenuModule,
     MatSlideToggleModule, MatCardModule,
      MatFormFieldModule, MatListModule ,MatSidenavModule, 
      MatDividerModule, MatSidenavModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
