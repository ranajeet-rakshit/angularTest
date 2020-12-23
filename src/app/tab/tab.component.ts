import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  charecters = [
    {name:"Luke Skywalker", side: ""},
    {name:"Darth Vader", side: ""}
  ];

  chosenSide = "all";

  constructor() { }

  ngOnInit(): void {
  }

  getCharecter(){
    if(this.chosenSide=="all"){
      return this.charecters.slice();
    }else{
      return this.charecters.filter((char)=>{
        return char.side == this.chosenSide;
      });
    }
  }

  sideAssigned(obj){
    console.log(obj);
    this.charecters.forEach((char)=>{
      if(char.name == obj.name){
        char.side = obj.side;
      }
    });
  }

}
