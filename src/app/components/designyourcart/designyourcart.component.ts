import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignyourcardService } from 'src/app/shared/services/designyourcard.service';

const AUTH_API = 'http://localhost:5000/design/create';

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

  designData!:FormGroup;

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
  imageDisplay :any;
  step = 1;
  constructor(public fb: FormBuilder, private ds: DesignyourcardService, private router: Router
    ,private http:  HttpClient) { 

  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(){
    this.designData = this.fb.group({
      image: ['',Validators.required],
      prenom: ['',Validators.required],
      nom: ['',Validators.required],
      entreprise: ['',Validators.required],
      poste: ['',Validators.required],
      birthday: ['',Validators.required],
      numHome: ['',Validators.required],
      numOffice: ['',Validators.required],
      numCell: ['',Validators.required],
      numOfficeFax: ['',Validators.required],
      email1: ['',Validators.required],
      email2: ['',Validators.required],
      paypal: ['',Validators.required],
      web1: ['',Validators.required],
      web2: ['',Validators.required],
      rue: ['',Validators.required],
      ville: ['',Validators.required],
      station: ['',Validators.required],
      pays: ['',Validators.required],
      backgroundCouleur: ['',Validators.required],
      couleurText: ['',Validators.required],
      couleurSurligner: ['',Validators.required]
    })
  }

  ngSubmit(){
    this.step = this.step + 1;
  }
  precedent(){
    this.step --;
  }

  onImageUpload(event:any){
   /*  const file = event.target.files[0];
    if (file) {
      this.designData.patchValue({ image: file });
      //this.designData.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = (event: any) =>{
        this.imageDisplay = event.target.result;
      }
      fileReader.readAsDataURL(file);
    } */

    if(event.target.files && event.target.files[0]){
      this.designData.patchValue({ image: event.target.files[0] });
      const fileReader = new FileReader();
      fileReader.onload = (event: ProgressEvent) => {
        this.imageDisplay = (<FileReader>event.target).result;
      }
      fileReader.readAsDataURL(event.target.files[0]);
    }
  }

  createYourCard(){

    /* console.log(this.designForm.value);
    console.log(this.designForm.valid); */
    if (this.designData.invalid) {
      console.log("error");
      return;
    }
    const designCardFormData = new FormData();
  /*   Object.keys(this.designData).map((key) =>{
      console.log(key);
      console.log(this.designData[key].value);
      designCardFormData.append(key, this.designData[key].value)
    }) */
    console.log(this.designCardForm);

    designCardFormData.append('image',this.designCardForm.image.value)
    designCardFormData.append('prenom',this.designCardForm.prenom.value)
    designCardFormData.append('nom',this.designCardForm.nom.value)
    designCardFormData.append('entreprise',this.designCardForm.entreprise.value)
    designCardFormData.append('poste',this.designCardForm.poste.value)
    designCardFormData.append('birthday',this.designCardForm.birthday.value)
    designCardFormData.append('numHome',this.designCardForm.numHome.value)
    designCardFormData.append('numOffice',this.designCardForm.numOffice.value)
    designCardFormData.append('numCell',this.designCardForm.numCell.value)
    designCardFormData.append('numOfficeFax',this.designCardForm.numOfficeFax.value)
    designCardFormData.append('email1',this.designCardForm.email1.value)
    designCardFormData.append('email2',this.designCardForm.email2.value)
    designCardFormData.append('paypal',this.designCardForm.paypal.value)
    designCardFormData.append('web1',this.designCardForm.web1.value)
    designCardFormData.append('web2',this.designCardForm.web2.value)
    designCardFormData.append('rue',this.designCardForm.rue.value)
    designCardFormData.append('ville',this.designCardForm.ville.value)
    designCardFormData.append('backgroundCouleur',this.designCardForm.backgroundCouleur.value)
    designCardFormData.append('couleurText',this.designCardForm.couleurText.value)
    designCardFormData.append('couleurSurligner',this.designCardForm.couleurSurligner.value)
    console.log(designCardFormData);
    this.ds.createCard(designCardFormData).subscribe(
      (response) => {
        if (response) {
          //alert(response)
          console.log(response)
        }
    },
      (error) =>{
          if (error) {
           // alert(error)
            console.log(error)
          }
      }
    )  

    /* this.http.post(AUTH_API,designCardFormData).subscribe(
      (response) => {
        if (response) {
          alert(response)
          console.log(response)
        }
    },
      (error) =>{
          if (error) {
            alert(error)
            console.log(error)
          }
      }
    ) */

    /* if (this.designForm.valid) {
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
    } */
  }
  get designCardForm(){
    return this.designData.controls;  }
}
