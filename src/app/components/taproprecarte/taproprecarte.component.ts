import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taproprecarte',
  templateUrl: './taproprecarte.component.html',
  styleUrls: ['./taproprecarte.component.css']
})
export class TaproprecarteComponent implements OnInit {
  
  isProfile = false
  isTel = false
  isweb = false
  isAddr = false
  constructor() { }

  ngOnInit(): void {
  }

  clickProfile(){
    this.isProfile = !this.isProfile
  }
  clickisTel(){
    this.isTel = !this.isTel
  }
  clickisweb(){
    this.isweb = !this.isweb
  }
  clickisAddr(){
    this.isAddr = !this.isAddr
  }
}
