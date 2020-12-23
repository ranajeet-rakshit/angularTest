import { Component } from '@angular/core';
import {random} from 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems: any = ["Apple","Mango","Banana"];

  newItemAdded(newItem){
    if(newItem!=''){
      this.cartItems.push(newItem);
    }
  }
}
