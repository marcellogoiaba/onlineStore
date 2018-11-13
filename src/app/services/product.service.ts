import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( 
    protected router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(){
   
  }
  public getAllProducts(){
    let obs = this.http.get('http://localhost:3000/products');
    obs.subscribe(() => {
      console.log('Got the response')
    })
  }
}
