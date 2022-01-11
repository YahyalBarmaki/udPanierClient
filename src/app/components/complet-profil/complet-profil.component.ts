import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complet-profil',
  templateUrl: './complet-profil.component.html',
  styleUrls: ['./complet-profil.component.css']
})
export class completProfilComponent implements OnInit {

  formValue!: FormGroup;

  currentUser: Object = {};
  getallmytypecard: any;

  constructor(
    private formbuilder: FormBuilder,
    // public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    // let id = this.actRoute.snapshot.paramMap.get('id');
    // this.authService.getUserProfile(id).subscribe((res: { msg: Object; })=> {
    //   this.currentUser = res.msg;

    //   console.log(id)
    // })
  }

  ngOnInit() {

    this.formValue = this.formbuilder.group(
      {
        name: [''],
        email: [''],
        password: [''],
        poste: [''],
        avatar: ['']
      }
    )


    this.getallmytypecard();
  }
}
