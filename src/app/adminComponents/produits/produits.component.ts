import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminProduitService } from 'src/app/shared/services/admin-produit.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  public title!:String;
  public img!:String;
  public desc!:String;
  public price!:String;
  public qtite!:String;
  constructor(public dialogRef: MatDialogRef<ProduitsComponent>,public fb: FormBuilder, private router: Router
    ,private http:  HttpClient,
    private ps: AdminProduitService,
    private ntf:NotificationService,
    ) { }

  productData!:FormGroup;

  productForm: FormGroup = new FormGroup(
    {
      //$key : new FormControl('null'),
      title: new FormControl('',[
        Validators.required
      ]),
      img: new FormControl('',[
        Validators.required
      ]),
      desc: new FormControl('',[
        Validators.required
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
      qtite: new FormControl('',[
        Validators.required
      ])
    }
  )
  ngOnInit(): void {
    this._initForm();
  }
 private _initForm(){
    this.productData = this.fb.group(
      {
        title:['',Validators.required],
        img:['',Validators.required],
        desc:['',Validators.required],
        price:['',Validators.required],
        qtite:['',Validators.required],
      }
    )
  }
  onClose() {
    this.dialogRef.close();
  }
  imageDisplay:any;
  onImageUpload(event:any){
    const file = event.target.files[0];
    if (file) {
      this.productData.patchValue({ img: file });
      //this.designData.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = (event: any) =>{
        this.imageDisplay = event.target.result;
      }
      fileReader.readAsDataURL(file);
    }
  }
  addProduct(){
    if (this.productData.invalid) {
      this.productData.reset();
      this.ntf.success(':: Veuillez remplir correctement')
      console.log("error");
      return;
    }
    const addProductFormData = new FormData();
    addProductFormData.append('title',this.productFormCtr.title.value)
    addProductFormData.append('img',this.productFormCtr.img.value)
    addProductFormData.append('desc',this.productFormCtr.desc.value)
    addProductFormData.append('price',this.productFormCtr.price.value)
    addProductFormData.append('qtite',this.productFormCtr.qtite.value)

    console.log(addProductFormData);
    this.ps.ajoutProduit(addProductFormData).subscribe(
      (response) => {
        if (response) {
          //alert(response)
      this.ntf.success(':: Veuillez remplir correctement')
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
    this.onClose()
  }
  get productFormCtr(){
    return this.productData.controls;  }


  onClear(){
      this.productForm.reset();
    }
    /**
     * Upload an image
     */










    
}
