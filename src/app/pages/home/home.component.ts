import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { Product } from '../../models/Product';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
  whatsapp=faWhatsapp
  viewDetails=faEye

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
products:Product[]=[
  {
    productName:"Auto ON/OFF  1/3 Phase With Dry Run Protection (Universal)",
    productRating:4.5,
    productAvailability:"in-stock",
    productPrice:566.00,
    productImg:"./assets/images/product/own-product/water-controller-o.png" 
 },
 {
  productName:"Auto OFF  Single Phase With (Universal)",
  productRating:3.5,
  productAvailability:"in-stock",
  productPrice:566.00,
  productImg:"./assets/images/product/retail-product/solar-plate.png" 
},
{
  productName:"Auto OFF  Single Phase (Tullu)",
  productRating:4.5,
  productAvailability:"in-stock",
  productPrice:566.00,
  productImg:"./assets/images/product/own-product/water-controller-o.png" 
},
{
  productName:"36 Watt LED Street Light Lens Model With D2D",
  productRating:2.5,
  productAvailability:"in-stock",
  productPrice:566.00,
  productImg:"./assets/images/product/retail-product/solar-plate.png" 
}
]



  

  test() {
    console.log('button clicked');
  }
}
