import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'career',component:CareerComponent},
];
