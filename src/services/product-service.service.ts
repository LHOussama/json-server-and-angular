import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../app/modules/produit.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private host:string="http://localhost:3000"
  constructor(private http:HttpClient) { }
  public getProducts(keyword:string="",page:number=1,size:number=4){
    let params:HttpParams=new HttpParams().set("_page",page).set("_limit",size).set("name_like",keyword)
    return this.http.get(this.host+"/products",{params:params,observe:"response"})
  }
  public checkProduct(prod:Product):Observable<Product>{
   return  this.http.patch<Product>(`${this.host}/products/${prod.id}`,{checked:!prod.checked})
}
  public deleteProduct(prod:Product){
  return this.http.delete(`${this.host}/products/${prod.id}`)
}

  save(product: any) {
    return this.http.post<Product>(`${this.host}/products`,product)
  }

  getProductsById(productId: number) {
    return this.http.get<Product>(this.host+"/products/"+productId)

  }

  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product)

  }
}

