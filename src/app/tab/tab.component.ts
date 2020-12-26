import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  charecters = [];
  swService: StarWarService

  chosenSide = "all";

  constructor(swService: StarWarService) { 
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  getCharecter(){
    this.charecters = this.swService.getCharecter(this.chosenSide);
    return this.charecters;
  }

}
