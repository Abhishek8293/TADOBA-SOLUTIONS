import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'career',component:CareerComponent},
    {path:'our-products',component:OurProductsComponent},
    {path:'product',component:ViewProductComponent},
    {path:"about-us", component:AboutUsComponent},
    {path:'terms&conditions', component:TermsAndConditionComponent},
    {path:'privacy-policy', component:PrivacyPolicyComponent},
    {path:'product/:productId',component:ViewProductComponent},
    {path:'sign-up', component:SignUpComponent},
];
