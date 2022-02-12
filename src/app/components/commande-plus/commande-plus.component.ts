import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignyourcardService } from 'src/app/shared/services/designyourcard.service';

@Component({
  selector: 'app-commande-plus',
  templateUrl: './commande-plus.component.html',
  styleUrls: ['./commande-plus.component.css']
})
export class CommandePlusComponent implements OnInit {

   public isButtonVisible:boolean = false;

   public iscoordonneVisible:boolean = false;

   public buttonName:any = 'isButtonVisible';

   public coordonneName:any= 'iscoordonneVisible';
/*Coordonné Variable*/
   public isContactVisible:boolean = false;
   public isMailVisible:boolean = false;
   public isPhoneVisible:boolean = false;
   public isWebVisible:boolean = false;
   public isAdresseVisible:boolean = false;
   public isCouleurVisible:boolean = false;

   public contactName:any = 'isContactVisible'
   public mailName:any = 'isMailVisible'
   public phoneName:any = 'isPhoneVisible'
   public webName:any ='isWebVisible'
   public adresseName:any = 'isAdresseVisible'
   public couleurName:any = 'isCouleurVisible'

   /**Disabled or enabled */
   /* public email = "";
   public phone = "";
   public web= "";
   public adresse = "";
   public couleur="" */
  /** Design Your Variable **/
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
  onImageUpload(event:any){
    const file = event.target.files[0];
    if (file) {
      this.designData.patchValue({ image: file });
      //this.designData.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = (event: any) =>{
        this.imageDisplay = event.target.result;
      }
      fileReader.readAsDataURL(file);
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
  toggle() {
    this.isButtonVisible = !this.isButtonVisible;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.isButtonVisible)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleC(){
    this.iscoordonneVisible = !this.iscoordonneVisible;
    if(this.iscoordonneVisible){
      this.coordonneName = "Hide";
   }
    else
      this.coordonneName = "Show";
  }

  toggleContact(){
    this.isContactVisible = !this.isContactVisible;
    if(this.isContactVisible){
      this.contactName = "Hide";
   }
    else
      this.contactName = "Show";
  }
  toggleMail(){
    this.isMailVisible = !this.isMailVisible;
    if(this.isMailVisible){
      this.mailName = "Hide";
   }
    else
      this.mailName = "Show";
  }
  togglePhone(){
    this.isPhoneVisible = !this.isPhoneVisible;
    if(this.isPhoneVisible){
      this.phoneName = "Hide";
   }
    else
      this.phoneName = "Show";
  }
  toggleWeb(){
    this.isWebVisible = !this.isWebVisible;
    if(this.isWebVisible){
      this.webName = "Hide";
   }
    else
      this.webName = "Show";
  }
  toggleAdresse(){
    this.isAdresseVisible = !this.isAdresseVisible;
    if(this.isAdresseVisible){
      this.adresseName = "Hide";
   }
    else
      this.adresseName = "Show";
  }
  toggleCouleur(){
    this.isCouleurVisible = !this.isCouleurVisible;
    if(this.isCouleurVisible){
      this.couleurName = "Hide";
   }
    else
      this.couleurName = "Show";
  }
}
