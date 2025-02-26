import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBikes } from '../interfaces/ibikes';
import { APIService } from '../api.service';
import { IEmployees } from '../interfaces/iemployees';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { IRental } from '../interfaces/irental';

@Component({
  selector: 'app-reservation-card',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css'
})
export class ReservationCardComponent implements OnInit{
  @Input() bikeData!: IBikes;
  @Output() closeEvent = new EventEmitter();

  postErr:boolean = false;
  errMsg:string = "";

  dataOk:boolean = false;
  empData: IEmployees[] = [];

  private readonly _current = new Date();
  readonly minDate = new Date(this._current);
  readonly maxDate = new Date(this._current.getFullYear()+ 0, 11, 31);

  info:string = "Liaka izvēle";
  // start:Date = new Date;
  // end:Date = new Date;

  // readonly range = new FormGroup({
  //   start: new FormControl<Date | null>(null),
  //   end: new FormControl<Date | null>(null),
  // });

  constructor(private api: APIService){
  };

  formD = new FormGroup({
    "rental_start": new FormControl<string | null>(null),
    "rental_end": new FormControl<string | null>(null),
    "e_bikes_id": new FormControl<string | null>(""),
    "employees_id": new FormControl<string | null>(""),
  });

  submitRental(){
      this.formD.value.e_bikes_id = this.bikeData.id+"";
      // this.formD.value.emloyee_id = parseInt(this.formD.value.emloyee_id);
      // let o = JSON.stringify(this.formD.value);
      this.api.postRental(this.formD.value).subscribe({
        next: (resp) => {
          console.log(resp);
      },
      error: (error) => {
          console.log(error.error.message,error.error.data)
          this.postErr = true;
          this.errMsg = error.error.message;
      },
      complete: () => {
        this.closeModal();
      }
      });
  }

  ngOnInit(): void {

    this.api.getAllEmpl().subscribe({
      next: (resp) => {
          // console.log(resp);
          this.empData.push(resp);
          this.empData = this.empData.flat();
          // console.log(this.empData);

      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          this.dataOk = true;
      }
    })
  }

  closeModal(){
    const close:boolean = false;
    this.closeEvent.emit(close);
  }

  getRangeDate(d:any){
    console.log("passed dates",d);

  }
}
