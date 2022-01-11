import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/auth/user';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AuthServices } from 'src/app/shared/services/auth.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  resulallcard: any = ['entreprise', 'particulier']
  dataObjectModel: User = new User();

  successMessage: String = '';
  formValue !: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private service: AuthService,
    private ser: AuthServices,
    private router: Router
  ) {
    this.formValue = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
    })
  }
  ngOnInit(): void {

    this.formValue = this.formbuilder.group(
      {
        username: [''],
        email: [''],
        password: [''],
      }
    )
    this.getallmytypecard;
  }

  getallmytypecard() {
    this.ser.getcardtype().subscribe((res: any) => {
      this.resulallcard = res
      console.log(this.resulallcard);
    })
  }

  //Cette permet de s'inscrire un client
  register() {
    this.dataObjectModel.username = this.formValue.value.username;
    this.dataObjectModel.email = this.formValue.value.email;
    this.dataObjectModel.password = this.formValue.value.password;
    console.log(this.dataObjectModel)
    this.service.signUp(this.dataObjectModel)
      .subscribe(res => {
        console.log(res)
        alert("L'enregistrement reussit")
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.router.navigate(['/signIn']);
      })
  }

}
