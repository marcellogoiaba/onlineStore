import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  imgUrl: String = 'https://cdn0.iconfinder.com/data/icons/material-style/48/share_ios-512.png';
  imgUrl2: String = 'https://cdn0.iconfinder.com/data/icons/material-style/48/share_ios-512.png';
  imgToUpload: File = null;
  imgToUpload2: File = null;
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

 
  handleFileInput(file: FileList){
    this.imgToUpload = file.item(0);

    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.imgToUpload);
  }
  
  handleFileInput2(file: FileList){
    this.imgToUpload2 = file.item(0);

    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.imgToUpload2);
  }

  addNewProduct(form){
    console.log(form)
    this.productService.postProduct(form.value.description
    ,form.value.itemName
    ,form.value.mainPhoto
    ,form.value.price
    ,form.value.quantity
    ,form.value.primaryphoto
    ,form.value.secondaryPhoto).subscribe(response =>{
      console.log(response)
    })
    
  }
}
