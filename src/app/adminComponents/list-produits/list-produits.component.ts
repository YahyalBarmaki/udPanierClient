import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminProduitService } from 'src/app/shared/services/admin-produit.service';
import { ProduitsComponent } from '../produits/produits.component';


@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  productsData:any  = [];
  displayedColumns: string[] = ['title', 'img', 'desc', 'price','qtite','actions'];
  @ViewChild(MatSort) sort!: MatSort; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;


  constructor(private dialog: MatDialog
    ,private ps:AdminProduitService) { }

  listData!: MatTableDataSource<any>; 

  ngOnInit(): void {
    this.ps.listProduit().subscribe(
      list =>{
       
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
        console.log(this.productsData)
      }
    )
    

  }
  allProduct(){
    this.ps.listProduit().subscribe(
       list =>{
        // this.productsData = list
        let array = list.map(item=>{
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
        this.productsData = list
         console.log(this.productsData)
       }

     )
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  /**
   * Buttin Create
   */
   onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ProduitsComponent,dialogConfig);
   }
   /**
    * Edit button
    */
    onEdit(element){
      
    }
}
