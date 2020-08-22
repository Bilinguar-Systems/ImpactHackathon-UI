import { Component, OnInit } from '@angular/core';
import { list, total } from 'cart-localstorage' 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  items = [];
  total = 0;
  ngOnInit() {
    this.items = list();
    console.log(total);
    this.total = total();
  }

}
