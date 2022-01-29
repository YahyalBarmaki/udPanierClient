import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignyourcardService } from 'src/app/shared/services/designyourcard.service';

@Component({
  selector: 'app-designyourcart',
  templateUrl: './designyourcart.component.html',
  styleUrls: ['./designyourcart.component.css']
})
export class DesignyourcartComponent implements OnInit {

  public image!: String;
  public prenom!: String;
  public nom!: String;
  public entreprise!: String;
  public poste!: String;
  public birthday!: String;
  public numHome!: String;
  public numOffice!: String;
  public numCell!: String;
  public numOfficeFax!: String;
  public email1!: String;
  public email2!: String;
  public paypal!: String;
  public web1!: String;
  public web2!: String;
  public rue!: String;
  public ville!: String;
  public station!: String;
  public pays!: String;
  public backgroundCouleur!: String;
  public couleurText!: String;
  public couleurSurligner!: String;

  designForm: FormGroup = new FormGroup({
    image: new FormControl('',[
        Validators.required
      ]),
      prenom: new FormControl('',[
        Validators.required
      ]),
      nom: new FormControl('',[
        Validators.required
      ]),
      entreprise: new FormControl('',[
        Validators.required
      ]),
      poste: new FormControl('',[
        Validators.required
      ]),
      birthday: new FormControl('',[
        Validators.required
      ]),
      numHome: new FormControl('',[
        Validators.required
      ]),
      numOffice: new FormControl('',[
        Validators.required
      ]),
      numCell: new FormControl('',[
        Validators.required
      ]),
      numOfficeFax: new FormControl('',[
        Validators.required
      ]),
      email1: new FormControl('',[
        Validators.required
      ]),
      email2: new FormControl('',[
        Validators.required
      ]),
      paypal: new FormControl('',[
        Validators.required
      ]),
      web1: new FormControl('',[
        Validators.required
      ]),
      web2: new FormControl('',[
        Validators.required
      ]),
      rue: new FormControl('',[
        Validators.required
      ]),
      ville: new FormControl('',[
        Validators.required
      ]),
      station: new FormControl('',[
        Validators.required
      ]),
      pays: new FormControl('',[
        Validators.required
      ]),
      backgroundCouleur: new FormControl('',[
        Validators.required
      ]),
      couleurText: new FormControl('',[
        Validators.required
      ]),
      couleurSurligner: new FormControl('',[
        Validators.required
      ])
  })
  errorMessage: any;


  constructor(public fb: FormBuilder, private ds: DesignyourcardService, private router: Router) { }
  step:any = 1
  ngOnInit(): void {
  }

  ngSubmit(){
    this.step = this.step + 1;
  }
  precedent(){
    this.step = this.step - 1;
  }

  createYourCard(){
    console.log(this.designForm.value);
    console.log(this.designForm.valid);

    if (this.designForm.valid) {
      this.ds.createYourCard(this.designForm.value)
      .subscribe((res) =>{
        console.log("first");
        console.log(res);
        this.router.navigate(['/profile']);
      },
      err => {
        this.errorMessage = err.error.message;
            console.log(this.errorMessage);

      }
        
      )
    }
  }
}
