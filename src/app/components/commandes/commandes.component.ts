import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor(private cmdSer:CommandeService) { }

  ngOnInit(): void {
  }

  effectuerPaiement(cmd:any){
    this.cmdSer.paiementParRedirection(cmd).subscribe(
      (res)=>console.log("Good"),
      (err)=>console.log("No Good")
    )
  }

}
