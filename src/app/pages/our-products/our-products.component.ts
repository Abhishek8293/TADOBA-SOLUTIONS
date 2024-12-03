import { CommonModule,Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ourProductList, Product } from '../../models/Product';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,MatIconModule,MatButtonModule,FormsModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent {

  //Original Product List
  originalProducts: Product[] = ourProductList;
  //Filtered Product List
  products: Product[] = [...this.originalProducts];
  //Search Query
  searchTerm: string = '';

  constructor(private location:Location){}

  navigateBack(){
    this.location.back();
  }

  //search method 
  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.products = this.originalProducts.filter(product => 
      product.productName.toLowerCase().includes(term)
    );
  }
  

}
