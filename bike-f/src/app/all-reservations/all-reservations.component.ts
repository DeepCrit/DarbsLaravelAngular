import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ErrorCComponent } from '../error-c/error-c.component';
import { ErrorMessages } from '../enums/error-messages';
import { IRentals } from '../interfaces/ireservations';

@Component({
  selector: 'app-all-reservations',
  imports: [ErrorCComponent],
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.css'
})
export class AllReservationsComponent implements OnInit {

  constructor(private api: APIService){}

  data:any;

  showError:boolean = false;
  showData:boolean = false;
  errorMsgEmpty:string = ErrorMessages.empty;


  ngOnInit(): void {
    this.api.getAllRentals().subscribe({
      next: (resp) => {
          console.log(resp);
          this.data = resp;
      },
      error: (error) => {
          console.log(error)
          this.showError = true;
      },
      complete: () => {
          this.showData = true;
          console.log('complete')
          console.log(this.data);
      }
    })
  }

}
