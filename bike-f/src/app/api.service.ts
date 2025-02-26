import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBikes } from './interfaces/ibikes';
import { IRentals } from './interfaces/ireservations';
import { IEmployees } from './interfaces/iemployees';
import { IRental } from './interfaces/irental';
import { IRentalRange } from './interfaces/irental-range';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiBaseUrl = "http://127.0.0.1:8000";

  private allBikesUrl = this.apiBaseUrl.concat("/bikes");
  private allRentalsUrl = this.apiBaseUrl.concat("/rentals");
  private allRangeRentalsUrl = this.apiBaseUrl.concat("/rentals/range");
  private postRentalUrl = this.apiBaseUrl.concat("/create/rental");
  private allEmployeesUrl = this.apiBaseUrl.concat("/emp");

  constructor(private http: HttpClient) { }

  getRentalRange(data:IRentalRange):Observable<IRentals>{
    return this.http.post<IRentals>(this.allRangeRentalsUrl,data);
  }

  getAllBikes():Observable<IBikes>{
    return this.http.get<IBikes>(this.allBikesUrl);
  }

  getAllRentals():Observable<IRentals>{
    return this.http.get<IRentals>(this.allRentalsUrl);
  }

  getAllEmpl():Observable<IEmployees>{
    return this.http.get<IEmployees>(this.allEmployeesUrl);
  }

  postRental(data: IRental):Observable<IRental>{
    console.log("form data ",data);
    return this.http.post<IRental>(this.postRentalUrl,data);
  }
}
