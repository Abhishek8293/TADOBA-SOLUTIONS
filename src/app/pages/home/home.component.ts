import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
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
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    ServiceCardComponent,
    FooterComponent,
    HeaderComponent,
    ImgSliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //icons
  rupee = faIndianRupee;
  rating = faStar;
  rightArrow = faArrowRight;
  whatsapp=faWhatsapp
  viewDetails=faEye

  //screen size
  screenWidth!: number;

  loopNumber: number = 4;

  serviceData: ServiceCardData[] = [
    {
      imgUrl: './assets/images/service/installation.jpg',
      title: 'Solar PV Plant Installation',
      description:
        'Our start-up comes with technical experts in different areas coming from several IITs with goal to provide best quality products.',
      navigation: 'Go to Service 1',
    },
    {
      imgUrl: './assets/images/service/pcb2.jpg',
      title: 'PCB Design & Fabrication',
      description:
        'Constantly working on products like Solar powered CCTV cameras, timer controlled street lights and all else..',
      navigation: 'Go to Service 2',
    },
    {
      imgUrl: './assets/images/service/customize.jpg',
      title: 'Customized Industrial Solutions',
      description:
        'Economical repair of electronic devices keeping your gadgets going on with less tussle..',
      navigation: 'Go to Service 3',
    },
    {
      imgUrl: './assets/images/service/3d-printing.jpg',
      title: '3D Prototype Printing',
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



  


  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      console.log('Initial Screen Width:', this.screenWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      console.log('Updated Screen Width:', this.screenWidth);
    }
  }






}
