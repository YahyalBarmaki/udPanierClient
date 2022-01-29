import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseURL = environment.endpointOrder

  constructor(private http: HttpClient) { }

  makePayment(stripeToken: any): Observable<any>{

    return this.http.post<any>(this.baseURL + '/checkout',{token:stripeToken})
  }
}
