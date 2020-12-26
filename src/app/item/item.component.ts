import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() charecter;
  swService: StarWarService;

  constructor(swService: StarWarService) { 
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onAssign(side){
    this.swService.sideAssigned({name:this.charecter.name, side: side});
  }

}
