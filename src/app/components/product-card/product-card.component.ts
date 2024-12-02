import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEye,
  faIndianRupee,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productImg!: string;
  @Input() productName!: string;
  @Input() productRating!: number;
  @Input() productAvailability!: string;
  @Input() productPrice!: number;
  @Input() productId!: string;

  rupee = faIndianRupee;
  rating = faStar;
  whatsapp = faWhatsapp;
  viewDetails = faEye;

  phoneNumber: string = '+918319348293';

  openWhatsApp(productId: string): void {
   // Ensure that the productId is properly encoded if it contains spaces or special characters
  const currentUrl = `https://tadobasolutions.netlify.app/product/${encodeURIComponent(productId)}`;
  // Encode the entire URL, so any special characters are handled
  const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(currentUrl)}`;
  window.open(whatsappUrl, '_blank');
}

}
