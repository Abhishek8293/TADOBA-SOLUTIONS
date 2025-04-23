import { CommonModule ,Location} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product, ourProductList, retailProductList } from '../../models/Product';

@Component({
  selector: 'app-retail-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,MatIconModule,MatButtonModule,FormsModule],
  templateUrl: './retail-products.component.html',
  styleUrl: './retail-products.component.css'
})
export class RetailProductsComponent {

  //Original Product List
  originalProducts: Product[] = retailProductList;
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
