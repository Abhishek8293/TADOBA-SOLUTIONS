import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';

interface ServiceCardData {
  imgUrl: string;
  title: string;
  description: string;
  navigation: string;
}

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CarouselComponent,  
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    ServiceCardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  rupee = faIndianRupee;
  rating = faStar;
  rightArrow = faArrowRight;

  serviceData: ServiceCardData[] = [
    {
      imgUrl: './assets/images/service3.jpg',
      title: 'Installation',
      description:
        'Our start-up comes with technical experts in different areas coming from several IITs with goal to provide best quality products.',
      navigation: 'Go to Service 1',
    },
    {
      imgUrl: './assets/images/service2.jpg',
      title: 'Commissioning',
      description:
        'Constantly working on products like Solar powered CCTV cameras, timer controlled street lights and all else..',
      navigation: 'Go to Service 2',
    },
    {
      imgUrl: './assets/images/service1.jpg',
      title: 'Maintenance',
      description:
        'Economical repair of electronic devices keeping your gadgets going on with less tussle..',
      navigation: 'Go to Service 3',
    },
    {
      imgUrl: 'assets/images/service4.jpg',
      title: 'Service 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus erat, at vulputate nisi.',
      navigation: 'Go to Service 4',
    },
    {
      imgUrl: 'assets/images/service1.jpg',
      title: 'Service 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus erat, at vulputate nisi.',
      navigation: 'Go to Service 4',
    },
  ];

  test() {
    console.log('button clicked');
  }
}
