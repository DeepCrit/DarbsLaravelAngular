import { Component, Input } from '@angular/core';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';
import { CommonModule } from '@angular/common';
import { IBikes } from '../interfaces/ibikes';

@Component({
  selector: 'app-card',
  imports: [ReservationCardComponent,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //danger !
  @Input() bData!: IBikes;

  showModal:boolean = false;

  changeModalState(state:boolean){
    // console.log("passed close modal state", state);
    this.showModal = state;
  }
  showReservation(data:IBikes){
      console.log(data);
      this.showModal = !this.showModal;
  }
}
