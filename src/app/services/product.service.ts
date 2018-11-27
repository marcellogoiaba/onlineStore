import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  private url: string = 'http://localhost:3000/products/';

  constructor(private http: HttpClient){ }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
 
}
