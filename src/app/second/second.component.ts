import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input('title')  boxtitle ="undefined";
  @Input('values') items:string[]=[];

  constructor() { 
     console.log("instantiated")
  }

  ngOnInit(): void {
  }

}
