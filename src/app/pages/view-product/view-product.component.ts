import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ourProductList, Product } from '../../models/Product';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    CarouselComponent,
    MatIconModule,
    FontAwesomeModule,
  ],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent implements OnInit {
  phoneNumber: string = '+918319348293';
  whatsapp = faWhatsapp;
  selectedImageIndex: number = 0;
  productId: string | null = null;

  product!: Product;

  constructor(private location: Location, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('productId');
    });
    this.product = this.getProductById(this.productId!);
  }

  getProductById(productId: string): Product {
    return ourProductList.find((p) => p.productId === productId)!;
  }

  share() {
    const currentUrl = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          url: currentUrl,
        })
        .then(() => console.log('Content shared successfully!'))
        .catch((error) => alert('Encountered error while sharing.'));
    } else {
      // alert('Web Share API not supported in your browser.');
      navigator.clipboard
        .writeText('sample text copied to clipboard')
        .then(() => {
          console.log('Text copied to clipboard!');
        });
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  navigateBack() {
    this.location.back();
  }

  callNumber(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  openWhatsApp(): void {
    const currentUrl = encodeURIComponent(window.location.href);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${currentUrl}`;
    window.open(whatsappUrl, '_blank');
  }
  
}
