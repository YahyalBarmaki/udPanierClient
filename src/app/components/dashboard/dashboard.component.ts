import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CountService } from 'src/app/shared/services/count.service';
//import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statistics = [];
  public userDetails: any;
  public currentUser: any;
  constructor(
    private router: Router,
    private countService: CountService
    //private token: AuthService
  ) {
  }

  ngOnInit(): void {
    const storageSocial = localStorage.getItem('google_auth');

    const currentUserAccess = localStorage.getItem('access_token');
    if (storageSocial) {
      this.userDetails = JSON.parse(storageSocial);
    }
    if (currentUserAccess) {
      this.currentUser = JSON.parse(currentUserAccess)

    }
    combineLatest([
      this.countService.getProductCount(),
      this.countService.getUserCount(),
      this.countService.getSocialMailCount(),
      this.countService.getSocialFacebookCount(),
    ]).subscribe((values:any)=> {
      this.statistics = values
      console.log(this.statistics[0]);
      console.log(this.statistics[1]);
      console.log(this.statistics[2]);
      console.log(this.statistics[3]);
    });
  }
  
  

  signOut(): void {
    let removeTokenSocial = localStorage.removeItem('google_auth');
    let removeTokenUserBD = localStorage.removeItem('access_token');
    if (removeTokenSocial == null || removeTokenUserBD == null) {

      this.router.navigate(['/signIn']);
    }


  }


}
