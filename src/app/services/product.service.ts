import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  private getUrl: string = 'http://localhost:3000/products/';
  private postUrl: string = 'http://localhost:3000/products/add';

  constructor(private http: HttpClient){ }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.getUrl)
  }
  // public addProduct(): Promise<Product[]>{
    
  // }
  
 
}
