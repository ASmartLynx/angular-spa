import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page.component';
import { ApartmentsList } from './apartments-list/apartments-list.component';
import { Apartment } from './apartment/apartment.component';

export const appRoutes: Routes = [
    {path: '', component: MainPage},
    {path: 'list', component: ApartmentsList},
    {path: 'apartment/:id', component: Apartment}
]; 