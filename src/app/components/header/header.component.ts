import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompatibilityComponent } from '../compatibility/compatibility.component';
import { AuthService } from '../../shared/auth/auth.service';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(
    private cardService: CardService,
    public authService: AuthService,
    public dialog: MatDialog
  ) { }
  logout() {
    this.authService.doLogout()
  }
  openDialog() {
    const dialogRef = this.dialog.open(CompatibilityComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.cardService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

}
