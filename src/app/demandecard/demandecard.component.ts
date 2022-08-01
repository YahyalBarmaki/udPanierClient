import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandecard',
  templateUrl: './demandecard.component.html',
  styleUrls: ['./demandecard.component.css'],
})
export class DemandecardComponent implements OnInit {

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

    //  if(event.target.files && event.target.files[0]){
    //    this.designData.patchValue({ image: event.target.files[0] });
    //    const fileReader = new FileReader();
    //    fileReader.onload = (event: ProgressEvent) => {
    //      this.imageDisplay = (<FileReader>event.target).result;
    //    }
    //    fileReader.readAsDataURL(event.target.files[0]);
    //  }
   }

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AdminProduitService } from 'src/app/shared/services/admin-produit.service';
// import { NotificationService } from 'src/app/shared/services/notification.service';

// @Component({
//   selector: 'app-demandecard',
//   templateUrl: './demandecard.component.html',
//   styleUrls: ['./demandecard.component.css']
// })
// export class DemandecardComponent implements OnInit {



// //    public email!:String;
// //    public img!:String;
// //    public nomentreprise!:String;
// //    public adresseentreprise!:String;
// //    public nbrecard!:String;
// //    constructor(public dialogRef: MatDialogRef<DemandecardComponent>,public fb: FormBuilder, private router: Router
// //      ,private http:  HttpClient,
// //      private ps: AdminProduitService,
// //      private ntf:NotificationService,
// //      ) { }

// //    productData!:FormGroup;

// //    productForm: FormGroup = new FormGroup(
// //      {
// //        //$key : new FormControl('null'),
// //        email: new FormControl('',[
// //          Validators.required
// //        ]),
// //        img: new FormControl('',[
// //          Validators.required
// //        ]),
// //        nomentreprise: new FormControl('',[
// //          Validators.required
// //        ]),
// //        adresseentreprise: new FormControl('',[
// //          Validators.required
// //        ]),
// //        nbrecard: new FormControl('',[
// //          Validators.required
// //        ])
// //      }
// //    )
// //    ngOnInit(): void {
// //      this._initForm();
// //    }
// //   private _initForm(){
// //      this.productData = this.fb.group(
// //        {
// //          email:['',Validators.required],
// //          nomentreprise:['',Validators.required],
// //          img:['',Validators.required],
// //          adresseentreprise:['',Validators.required],
// //          nbrecard:['',Validators.required],
// //        }
// //      )
// //    }
// //    onClose() {
// //      this.dialogRef.close();
// //    }
// //    imageDisplay:any;
// //   //  onImageUpload(event:any){
// //   //    const file = event.target.files[0];
// //   //    if (file) {
// //   //      this.productData.patchValue({ img: file });
// //   //      //this.designData.get('image').updateValueAndValidity();
// //   //      const fileReader = new FileReader();
// //   //      fileReader.onload = (event: any) =>{
// //   //        this.imageDisplay = event.target.result;
// //   //      }
// //   //      fileReader.readAsDataURL(file);
// //   //    }
// //   //  }
// //    addProduct(){
// //      if (this.productData.invalid) {
// //        this.productData.reset();
// //        this.ntf.success(':: Veuillez remplir correctement')
// //        console.log("error");
// //        return;
// //      }
// //      const addProductFormData = new FormData();
// //      addProductFormData.append('email',this.productFormCtr.email.value)
// //      addProductFormData.append('img',this.productFormCtr.img.value)
// //      addProductFormData.append('nomentreprise',this.productFormCtr.nomentreprise.value)
// //      addProductFormData.append('adresseentreprise',this.productFormCtr.adresseentreprise.value)
// //      addProductFormData.append('nbrecard',this.productFormCtr.nbrecard.value)

// //      console.log(addProductFormData);
// //      this.ps.ajoutProduit(addProductFormData).subscribe(
// //        (response) => {
// //          if (response) {
// //            //alert(response)
// //        this.ntf.success(':: Veuillez remplir correctement')
// //            console.log(response)
// //          }
// //      },
// //        (error) =>{
// //            if (error) {
// //             // alert(error)
// //              console.log(error)
// //            }
// //        }
// //      )
// //      this.onClose()
// //    }
// //    get productFormCtr(){
// //      return this.productData.controls;  }


// //    onClear(){
// //        this.productForm.reset();
// //      }
// //      /**
// //       * Upload an image
// //       */











// //   // constructor() { }

// //   // ngOnInit(): void {
// //   // }

// // }

