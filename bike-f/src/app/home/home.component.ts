import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { APIService } from '../api.service';
import { ErrorCComponent } from '../error-c/error-c.component';
import { ErrorMessages } from '../enums/error-messages';

@Component({
  selector: 'app-home',
  imports: [CardComponent,ErrorCComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  errorMsgEmpty:string = ErrorMessages.empty;
  data:any;
  showError:boolean = false;
  showData:boolean = false;

  constructor(private api: APIService){}

  ngOnInit(): void {
    this.api.getAllBikes().subscribe({
      next: (resp) => {
          console.log(resp);
          this.data = resp;
      },
      error: (error) => {
          this.showError = true;
          console.log(error)
      },
      complete: () => {
          this.showData = true;
          console.log('complete')
      }
    })
  }

  // data = {id:1, name:"nosaukums",pic:"werwer"};
  // data2 = {id:12, name:"nosaukums2",pic:"werwer2"};
}
