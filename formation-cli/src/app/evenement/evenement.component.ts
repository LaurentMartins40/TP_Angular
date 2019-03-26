import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  isHidden:boolean=false;
  constructor() { }
  ngOnInit() {
  }
  handleClick() {
  this.isHidden=this.isHidden?false:true;
}
}