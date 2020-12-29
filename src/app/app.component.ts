import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First angular app';
  caption = "Developed in Thirdware";
  flags:boolean[] = [true,false, false , false,true]; 
  programmers:string[]= ["Hari","Naresh","Krishna","Jason","Rathore"];
  style:any[]=[
    {backgroundColor: 'yellow'},
    {backgroundColor: 'green'},
    {backgroundColor:'lightblue'},
    {backgroundColor: 'orange'},
    {backgroundColor: 'tomato'}
  ]
}
