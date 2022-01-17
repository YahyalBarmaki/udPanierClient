import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userDetails: any;
  public currentUser: any;
  constructor(
    private router: Router,
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

  }


  signOut(): void {
    let removeTokenSocial = localStorage.removeItem('google_auth');
    let removeTokenUserBD = localStorage.removeItem('access_token');
    if (removeTokenSocial == null || removeTokenUserBD == null) {

      this.router.navigate(['/signIn']);
    }


  }


}
