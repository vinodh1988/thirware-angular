import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() boxno:number=0;

  constructor() { 
     console.log("instantiated")
  }

  ngOnInit(): void {
  }

}
