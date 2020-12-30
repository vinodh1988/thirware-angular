import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges {

  @Input('title')  boxtitle ="undefined";
  @Input('values') items:string[]=[];

  constructor() { 
     console.log("instantiated")
     console.log(this.boxtitle,this.items)
  }
 //component said to be initiated  -- [one tim process]
 //only if the object constructed and input values are received from the parent

  ngOnInit(): void {
    console.log("initialized")
    console.log(this.boxtitle,this.items)
  }
  ngOnChanges(){
     console.log("received",this.items);
  }
  }


