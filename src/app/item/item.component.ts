import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() charecter;
  @Output() onSideAssigned = new EventEmitter<{name:string, side:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAssign(side){
    this.onSideAssigned.emit({name:this.charecter.name, side: side});
  }

}
