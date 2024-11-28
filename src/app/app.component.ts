import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { MatIconModule } from '@angular/material/icon';
import { faYoutube,faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent,MatIconModule,FontAwesomeModule, FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tadoba-Solutions';

  instagram = faInstagram;
  facebook = faFacebook;
  youtube = faYoutube;
  twitter = faXTwitter;



}
