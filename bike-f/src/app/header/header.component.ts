import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ELinks } from '../enums/elinks';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  home = ELinks.home;
  res = ELinks.reservations;
  rentR = ELinks.rentalRange;


}
