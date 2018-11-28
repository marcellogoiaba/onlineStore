import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  private getUrl: string = 'http://localhost:3000/products/';
  private postUrl: string = 'http://localhost:3000/products/add';

  constructor(private http: HttpClient){ }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.getUrl)
  }
    
  
  
 public postProduct(
        description: string,
        itemName: string,
        mainPhoto: string,
        price: number,
        quantity: number,
        secondaryPhoto: string): Observable<Product[]>{


    let jsonBody = {
      description,
      itemName,
      mainPhoto,
      price,
      quantity,
      secondaryPhoto

    }

    console.log(jsonBody)
  return this.http.post<Product[]>(this.postUrl, jsonBody, this.httpOptions)
}
}
