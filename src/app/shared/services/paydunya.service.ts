import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paydunya } from 'src/app/models/paydunya';
 const  apiServer = "https://app.paydunya.com/sandbox-api/v1/checkout-invoice/create";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "PAYDUNYA-MASTER-KEY": "wQzk9ZwR-Qq9m-0hD0-zpud-je5coGC3FHKW",
      "PAYDUNYA-PRIVATE-KEY": "test_private_GYqtXS57coENYdPwHR4vGEGeQNE",
      "PAYDUNYA-TOKEN": "rJAGC0bGkNnnfY9p2aBd"
     } )
  }
@Injectable({
  providedIn: 'root'
})
export class PaydunyaService {

  constructor(private http:HttpClient) { }

  paydunya(body:any):Observable<Paydunya>{
    
    return this.http.post<Paydunya>(apiServer,body,httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
