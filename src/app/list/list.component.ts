import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() charecters;
  @Output() sideAssigned = new EventEmitter<{name:string, side:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSideAssigned(obj){
    this.sideAssigned.emit({name:obj.name, side: obj.side});
  }

}
