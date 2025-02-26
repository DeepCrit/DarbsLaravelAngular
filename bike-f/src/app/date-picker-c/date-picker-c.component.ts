import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-date-picker-c',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule,FormsModule,ReactiveFormsModule],
  templateUrl: './date-picker-c.component.html',
  styleUrl: './date-picker-c.component.css'
})
export class DatePickerCComponent {
  //Y-m-d H:i:s
  //
  @Output() rangeDate = new EventEmitter();

  private readonly _current = new Date();
  readonly minDate = new Date(this._current);
  readonly maxDate = new Date(this._current.getFullYear()+ 0, 11, 31);

  info:string = "Liaka izvēle";
  // start:Date = new Date;
  // end:Date = new Date;

  readonly range = new FormGroup({
    rental_start: new FormControl<Date | null>(null),
    rental_end: new FormControl<Date | null>(null),
  });

  sendData(){
    console.log("emit date",this.range.value);
    this.rangeDate.emit(this.range.value);
  }


}
