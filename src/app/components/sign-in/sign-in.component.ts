import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { UserAuth } from './../../models/user';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
TokenStorageService
/**
 * Social login
 */

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  public email!: string;
  public password!: string;
  public error!: string;
  isLoggedIn = false;
  authError = false;
  erreurMessage = false;
  errorMessage = '';
  authMessage="Votre email ou mot de passe est incorrect"
  roles: string[] = [];
  signinForm: FormGroup = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(6)])
  });
  isSubmitted = false;

  constructor(
    private titleService: Title,
    public fb: FormBuilder,
    private auth_service: AuthService,
    private authService: SocialAuthService,
    public router: Router,
    private tl:TokenStorageService
  ) {
    this.titleService.setTitle('SignIn');
  }

  /**
   * Social login
   */
  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/profile').then();
    });
  }
  loginWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('facebook_auth', JSON.stringify(data));
      this.router.navigateByUrl('/profile').then();
    });
  }

  ngOnInit() {
  }
  get fEmail() { return this.signinForm.controls; }

  login() {
    console.log(this.signinForm.value);
    if (this.signinForm.valid) {
      this.auth_service.signIn(this.signinForm.value)
        .subscribe((res) => {
          console.log(res)
          this.router.navigate(['/dashboards']);
        },
          (error:HttpErrorResponse) => {
            console.log(error);
            this.erreurMessage = true
            if(error.status!== 401){
                this.authMessage = "Erreur au niveau du serveur, veillez ressayer plus tard s'il vous plait"
            }
          }
        )
    }
    else {
      alert("Password ou mail invalid")
      this.router.navigate(['/signIn']);
    }

  }
  loginUser(){
    if (this.signinForm.valid) {
      this.auth_service.signLogin(this.fEmail.email.value, this.fEmail.password.value).subscribe(
        (res)=>{
          console.log(res);
          this.authError = false;
          this.tl.setToken(res.accessToken);
          const token = this.tl.getToken();

          if (token) {
            console.log(token);
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
              console.log(tokenDecode.isAdmin);
              if (tokenDecode.isAdmin) {
                this.router.navigate(['/designyourcart'])
              }
              else{
                this.router.navigate(['/dashboards'])
              }
            
          }
  
        },  
        (error:HttpErrorResponse) => {
          console.log(error);
          this.erreurMessage = true
          if(error.status!== 400){
              this.authMessage = "Erreur au niveau du serveur, veillez ressayer plus tard s'il vous plait"
          }
        }
      )
    }else {
      alert("Password ou mail invalid")
      this.router.navigate(['/signIn']);
    }
    
    
  }
}
