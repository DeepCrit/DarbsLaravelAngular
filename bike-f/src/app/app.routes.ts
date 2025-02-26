import { Routes } from '@angular/router';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { HomeComponent } from './home/home.component';
import { RentalRangeComponent } from './rental-range/rental-range.component';
import { ELinks } from './enums/elinks';

// linki uz komponentem
export const routes: Routes = [
  {
    path: ELinks.root,
    component: HomeComponent
  },
  {
    path: ELinks.reservations,
    component: AllReservationsComponent
  },
  {
    path: ELinks.home,
    component: HomeComponent
  },
  {
    path: ELinks.rentalRange,
    component: RentalRangeComponent
  }
];
