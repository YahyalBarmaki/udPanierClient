import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paydunya } from 'src/app/models/paydunya';
import { environment } from 'src/environments/environment';
 const  apiServer = "https://app.paydunya.com/sandbox-api/v1/checkout-invoice/create";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "PAYDUNYA-MASTER-KEY": "VpDhKUiS-oyzR-D4ml-U6ft-YA7cDdVpDII0",
      "PAYDUNYA-PRIVATE-KEY": "test_private_mMDiJp1K4ucMA5ZBI5y9cEcjvOr",
      "PAYDUNYA-TOKEN": "v34SQ2YXPBqNZpGjhwNW"
     } )
  }
@Injectable({
  providedIn: 'root'
})
export class PaydunyaService {

  constructor(private http:HttpClient) { }
  private baseURL = environment.endpointShipping

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
 shipping(body:any){
  return this.http.post(this.baseURL+'/create',body);
}
}
