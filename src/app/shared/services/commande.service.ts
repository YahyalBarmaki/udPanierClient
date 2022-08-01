import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_PAR = 'https://paydunya.com/checkout/invoice/rJAGC0bGkNnnfY9p2aBd';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  paiementParRedirection(body:any){
    return this.http.post(API_PAR, body, {
      observe: 'body'
    })
  }
  
}
