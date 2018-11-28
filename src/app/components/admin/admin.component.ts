import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  

  newProduct: Product;
  constructor( private productService: ProductService) { }

  ngOnInit() {
  }

  
  // public insertProduct(itemName, description, price, quantity, mainPhoto, secondaryPhoto){
  //   let jsonBody = {
  //     'product':{
  //       'itemName': itemName,
  //       'description': description,
  //       'price': price,
  //       'quantity': quantity,
  //       'mainPhoto': mainPhoto,
  //       'secondaryPhoto': secondaryPhoto
  //     }
  //   }
  // }


  addNewProduct(form){
    console.log(form)
    this.productService.postProduct(form.value.description
    ,form.value.itemName
    ,form.value.mainPhoto
    ,form.value.price
    ,form.value.quantity
    ,form.value.secondaryPhoto).subscribe(response =>{
      console.log(response)
    })
    
  }
}
