import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items:any;
  @Output() onItemAdded = new EventEmitter<String>();
  item: String="";

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    if(this.item!=''){
      this.onItemAdded.emit(this.item);
      this.item = '';
    }
  }

}
