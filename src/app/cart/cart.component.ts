import { Component, OnInit } from '@angular/core';
import { list, total, destroy } from 'cart-localstorage'
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private cartService: CartService) {}

  items = [];
  payment_method: string;
  total = 0;
  ngOnInit() {
    this.items = list();
    this.total = total();
  }

  async checkout() {
   

    this.items.forEach( obj => this._renameKey( obj, 'id', 'product_id' ) );
    this.items.forEach( obj => this._renameKey( obj, 'price', 'product_cost' ) );

    let payload= {
      mode_of_payment: this.payment_method,
      products:  this.items
    }
    console.log(payload);

    let res = await this.cartService.checkout(payload).toPromise();
    destroy();
    this._snackBar.open("Purchase Done!", "Ok", {
      duration: 2000,
    });
  }

  _renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}
