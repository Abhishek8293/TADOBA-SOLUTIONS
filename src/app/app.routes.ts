import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';


export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'career',component:CareerComponent},
    {
        path:'our-products',
        component:OurProductsComponent,
    },
    {path:'product/:productId',component:ViewProductComponent}
];
