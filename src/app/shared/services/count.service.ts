import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuth } from 'src/app/models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountService {
  private baseUrl = environment.endpointBase;
  constructor(private http: HttpClient) { }

  getListSocialMail(){
    return this.http.get(`${this.baseUrl}apiSocial/allSocialRegister`)
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }

  getListUser():Observable<UserAuth[]>{
    return this.http.get<UserAuth[]>(`${this.baseUrl}api/allUser`)
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }
  getUserCount(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/get/count`)
    .pipe(map((objectValue1:any)=>objectValue1.adminCount))
  }

  getProductCount(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}product/get/count`)
    .pipe(map((objectValue2:any)=>objectValue2.productCount))
  }

  getSocialMailCount(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}apiSocial/get/count`)
    .pipe(map((objectValue3:any)=>objectValue3.socialRegisterCount))
  }

  getSocialFacebookCount(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}apiSocial/get/count`)
    .pipe(map((objectValue4:any)=>objectValue4.apiSocialCount))
  }

  
}
