import { CommonModule,Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Product } from '../../models/Product';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,MatIconModule,MatButtonModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent {



  products:Product[]=[
    {
      productName:"Auto ON/OFF 1/3 Phase With Dry Run Protection (Universal)",
      productRating:4.5,
      productAvailability:"in-stock",
      productPrice:2359.00,
      productImg:"./assets/images/product/own-product/6.png" 
   },
   {
    productName:"Auto OFF Single Phase With (Universal)",
    productRating:3.5,
    productAvailability:"in-stock",
    productPrice:759.00,
    productImg:"./assets/images/product/own-product/1.png" 
  },
  {
    productName:"Auto OFF Single Phase (Tullu)",
    productRating:4.5,
    productAvailability:"in-stock",
    productPrice:659.00,
    productImg:"./assets/images/product/own-product/3.png" 
  },
  {
    productName:"Auto OFF Single Phase (Submersible)",
    productRating:4.5,
    productAvailability:"in-stock",
    productPrice:559.00,
    productImg:"./assets/images/product/own-product/3.png" 
  },
  {
    productName:"AC/DC Switch",
    productRating:4.5,
    productAvailability:"in-stock",
    productPrice:559.00,
    productImg:"./assets/images/product/own-product/ac-dc-switch.jpg" 
  },
  {
    productName:"Portable Soil Sensor Device",
    productRating:2.5,
    productAvailability:"in-stock",
    productPrice:1799.00,
    productImg:"./assets/images/product/own-product/portable-soil-sensor-device.jpg" 
  }
  ]

  constructor(private location:Location){}

  navigateBack(){
    this.location.back();
  }


}
