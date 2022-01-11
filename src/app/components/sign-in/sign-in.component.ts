import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { UserAuth } from './../../models/user';
/**
 * Social login
 */

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {


  isLoggedIn = false;
  errorMessage = '';
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
    private tokenStorage: TokenStorageService,
    private authService: SocialAuthService,
    public router: Router
  ) {
    this.titleService.setTitle('SignIn');
  }

  /**
   * Social login
   */
  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/dashboards').then();
    });
  }
  loginWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('facebook_auth', JSON.stringify(data));
      this.router.navigateByUrl('/dashboards').then();
    });
  }

  ngOnInit() {
  }
  get fEmail() { return this.signinForm.controls; }

  login() {
    console.log(this.signinForm.value);
    if (this.signinForm.valid) {
      this.auth_service.signIn(this.signinForm.value).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('token', data.toString());
          //console.log(localStorage.getItem('token'));
          this.router.navigate(['/home']);
        },
        err => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage)
        }
      );
    }
  }

}
