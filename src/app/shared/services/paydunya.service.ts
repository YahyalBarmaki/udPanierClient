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
      "PAYDUNYA-MASTER-KEY": "X7BAbgUo-lZ7X-mwUh-jZxS-Tshr5mrcM6wM",
      "PAYDUNYA-PRIVATE-KEY": "live_private_2gVHlrhKv7F7cXEPRQ0sMDYQK0o",
      "PAYDUNYA-TOKEN": "x26vOVMnTrQCE535aEN6"
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
