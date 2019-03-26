import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isHidden: boolean = false;
  public red:string = "red";
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      this.red = this.red=="red"?"black":"red";
    }, 2000)
  }
}