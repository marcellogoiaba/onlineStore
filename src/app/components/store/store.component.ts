import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from '../../services/product.service';
import { Product } from '../.././models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {

  products: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

}
