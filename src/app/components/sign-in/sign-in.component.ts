import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { UserAuth } from './../../models/user';
import { first } from 'rxjs/operators';
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
          const jsonData = JSON.stringify(res)
          localStorage.setItem("access_token", jsonData);
          console.log(jsonData)
          this.router.navigate(['/profile']);
        },
          err => {
            this.errorMessage = err.error.message;
            console.log(this.errorMessage);

          }
        )
    }
    else {
      alert("Password ou mail invalid")
      this.router.navigate(['/signIn']);
    }

  }

}
