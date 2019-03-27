import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isDisplay: boolean = true;
  formations: Array<Formation> = [];
  constructor() { }
  getColorByElement(isFirst: boolean = false,isLast:boolean= false) {
    return isFirst ? 'red' : (isLast?'green':'black');
  }
  getBackgroundByElement(isOdd: boolean = false) {
    return isOdd ? 'gray' : 'white';
  }
  ngOnInit() {
    this.formations = [
      new Formation('Module Angular',10,new Date(2019,1,28),new Date(2019,4,17)),
      new Formation('Module JavaScript',11,new Date(2019,1,28),new Date(2019,4,17)),
      new Formation('Module TypeScript',12,new Date(2019,1,28),new Date(2019,4,17)),
    ]
  }
  fonction() {
    this.isDisplay = !this.isDisplay
  }
}