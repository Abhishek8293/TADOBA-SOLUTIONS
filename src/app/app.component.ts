import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    FontAwesomeModule,
    FooterComponent,
    RouterModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tadoba-Solutions';

  instagram = faInstagram;
  facebook = faFacebook;
  youtube = faYoutube;
  twitter = faXTwitter;

  showButton = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showButton = scrollTop > 1000;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
