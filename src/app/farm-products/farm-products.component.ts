import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartComponent } from '../cart/cart.component';
import { add, total } from 'cart-localstorage' 

@Component({
  selector: 'app-farm-products',
  templateUrl: './farm-products.component.html',
  styleUrls: ['./farm-products.component.css']
})
export class FarmProductsComponent implements OnInit {

  data ={}

  constructor(private productService: ProductService, ) { }

  async ngOnInit() {
    //load data here
    this.data = await this.productService.getProducts(1).toPromise();
  }

  addToCart(item){
    console.log('item')
    add({id: item.id, name: item.items, price: item.product_cost},1);
  }

}
