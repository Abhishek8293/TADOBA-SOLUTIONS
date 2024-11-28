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
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Product } from '../../models/Product';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RouterModule } from '@angular/router';

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
    ImgSliderComponent,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //icons
  rightArrow = faArrowRight;
  rupee = faIndianRupee;
  rating = faStar;
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
    }
  ];

// products:Product[]=[
//   {
//     productId:1,
//     productName:"Auto ON/OFF  1/3 Phase With Dry Run Protection (Universal)",
//     productRating:4.5,
//     productAvailability:"in-stock",
//     productPrice:566.00,
//     productImg:"./assets/images/product/own-product/water-controller-o.png" 
//  },
//  {
//   productId:2,
//   productName:"Auto OFF  Single Phase With (Universal)",
//   productRating:3.5,
//   productAvailability:"in-stock",
//   productPrice:566.00,
//   productImg:"./assets/images/product/retail-product/solar-plate.png" 
// },
// {
//   productId:3,
//   productName:"Auto OFF  Single Phase (Tullu)",
//   productRating:4.5,
//   productAvailability:"in-stock",
//   productPrice:566.00,
//   productImg:"./assets/images/product/own-product/water-controller-o.png" 
// },
// {
//   productId:4,
//   productName:"36 Watt LED Street Light Lens Model With D2D",
//   productRating:2.5,
//   productAvailability:"in-stock",
//   productPrice:566.00,
//   productImg:"./assets/images/product/retail-product/solar-plate.png" 
// }
// ]
// products3:Product[]=[
//   {
//     productId:1,
//     productName:"Auto ON/OFF  1/3 Phase With Dry Run Protection (Universal)",
//     productRating:4.5,
//     productAvailability:"in-stock",
//     productPrice:566.00,
//     productImg:"./assets/images/product/own-product/water-controller-o.png" 
//  },
//  {
//   productId:1,
//   productName:"Auto OFF  Single Phase With (Universal)",
//   productRating:3.5,
//   productAvailability:"in-stock",
//   productPrice:566.00,
//   productImg:"./assets/images/product/retail-product/solar-plate.png" 
// },
// {
//   productId:1,
//   productName:"Auto OFF  Single Phase (Tullu)",
//   productRating:4.5,
//   productAvailability:"in-stock",
//   productPrice:566.00,
//   productImg:"./assets/images/product/own-product/water-controller-o.png" 
// }
// ]



  


  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
  
    }
  }






}
