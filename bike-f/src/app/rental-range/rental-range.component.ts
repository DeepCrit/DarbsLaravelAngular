import { Component } from '@angular/core';
import { DatePickerCComponent } from '../date-picker-c/date-picker-c.component';
import { CommonModule } from '@angular/common';
import { APIService } from '../api.service';
import { TableComponent } from '../table/table.component';
import { IRentals } from '../interfaces/ireservations';

@Component({
  selector: 'app-rental-range',
  imports: [DatePickerCComponent,CommonModule,TableComponent],
  templateUrl: './rental-range.component.html',
  styleUrl: './rental-range.component.css'
})
export class RentalRangeComponent {

  constructor(private api: APIService){};

  dataFromPicker:any|null;
  btnName:string = "Meklēt";
  foundData:IRentals[] = [];
  disableBtn:boolean = true;

  fillData(data:any){
    this.dataFromPicker = data;
    this.disableBtn=false;
  }

  searchData(){
    this.foundData = [];
    console.log("Search range",this.dataFromPicker);

    this.api.getRentalRange(this.dataFromPicker).subscribe({
      next: (resp) => {
        console.log("0000000",resp);
        // this.foundData = resp;
        if(resp == null){
          console.log("no data");
          return;
        }
        this.foundData.push(resp);
        this.foundData = this.foundData.flat();
    },
    error: (error) => {
        console.log(error)
    },
    complete: () => {
        console.log('complete')
        this.disableBtn=true;
        this.dataFromPicker=null;
    }
    });
  }


}
