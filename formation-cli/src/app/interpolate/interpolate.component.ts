import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
  nom: string = 'Bewizyu';
  prenom: string = 'nico';
  constructor() { }
  ngOnInit() {
  }
  getFullName(){
    return `${this.prenom} ${this.nom}`
  }
}
