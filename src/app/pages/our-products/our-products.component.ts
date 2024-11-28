import { CommonModule,Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ourProductList, Product } from '../../models/Product';
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



  products:Product[]= ourProductList;

  constructor(private location:Location){}

  navigateBack(){
    this.location.back();
  }


}
