import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First angular app';
  caption = "Developed in Thirdware";
  flags:boolean[] = [true,true, true , true,true]; 
  programmers:string[]= ["Hari","Naresh","Krishna","Jason","Rathore"];
  item:string= "type item here";
  option:number=2;
  info="no information from child yet";
  style:any[]=[
    {backgroundColor: 'yellow'},
    {backgroundColor: 'green'},
    {backgroundColor:'lightblue'},
    {backgroundColor: 'orange'},
    {backgroundColor: 'tomato'}
  ]

  secondinfo:any[] =[
     {title:'Technologies', values:['Java','Angular','HTML','SQL']},
     {title:'Team', values:['Jerry','Anderson','Harry','Mukund','Christopher']},
     {title:'Technology partners', values:['Oracle','Microsoft','Redhat']},
  ]

  toggle(x:number):void{
    this.flags[x]=!this.flags[x];
  }

  process():void{
   // this.secondinfo[this.option].values.push(this.item);
    this.secondinfo[this.option].values=[...this.secondinfo[this.option].values, this.item]
  }

  receiveInfo(info:any,boxno:string):void{
    this.info = info + " is received from"+boxno;
  }
}
