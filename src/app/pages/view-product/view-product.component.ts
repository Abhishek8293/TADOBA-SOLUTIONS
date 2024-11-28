import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { CarouselComponent, CarouselImage } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [RouterModule, CommonModule, MatButtonModule, MatProgressBarModule, CarouselComponent,MatIconModule,FontAwesomeModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent {

  whatsapp=faWhatsapp;
  selectedImageIndex: number = 0;

  data: CarouselImage[] = [
    { imgUrl: './assets/images/product/own-product/1.png' },
    { imgUrl: './assets/images/product/own-product/3.png' },
    { imgUrl: './assets/images/product/own-product/4.png' },
  ];

  
  smartphoneAttributes = [
    { attributeName: "Brand", attributeValue: "Samsung" },
    { attributeName: "Model", attributeValue: "Galaxy S23 Ultra" },
    { attributeName: "Display Size", attributeValue: "6.8 inches" },
    { attributeName: "Resolution", attributeValue: "1440 x 3088 pixels" },
    { attributeName: "Operating System", attributeValue: "Android 13" },
    { attributeName: "Processor", attributeValue: "Snapdragon 8 Gen 2" },
    { attributeName: "RAM", attributeValue: "12 GB" },
    { attributeName: "Internal Storage", attributeValue: "256 GB" },
    { attributeName: "Battery Capacity", attributeValue: "5000 mAh" },
    { attributeName: "Main Camera", attributeValue: "200 MP + 12 MP + 10 MP + 10 MP" },
    { attributeName: "Front Camera", attributeValue: "12 MP" },
    { attributeName: "Charging Speed", attributeValue: "45W Fast Charging" },
    { attributeName: "Weight", attributeValue: "234 grams" },
    { attributeName: "Connectivity", attributeValue: "5G, Wi-Fi 6, Bluetooth 5.3" },
    { attributeName: "Water Resistance", attributeValue: "IP68" },
  ];

  constructor(private location: Location) {}

  share() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Web Share API in Angular 18',
          text: 'Check out this feature!',
          url: 'https://google.com', // Use a simple URL for testing
        })
        .then(() => console.log('Content shared successfully!'))
        .catch((error) => alert('Encountered error while sharing.'));
    } else {
      // alert('Web Share API not supported in your browser.');
      navigator.clipboard
        .writeText('sample text copied to clipboard')
        .then(() => {
          console.log('Text copied to clipboard!');
          // this.snackBarService.openSuccessSnackBar('Copied to clipboard!');
        });
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  navigateBack() {
    this.location.back();
  }


}
