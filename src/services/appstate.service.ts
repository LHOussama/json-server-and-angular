import { Injectable } from '@angular/core';
import {Product} from "../app/modules/produit.model";
@Injectable({
  providedIn: 'root'
})
export class AppstateService {
public productState:any={
  products:[],
  keyword:"",
  totalPages:0,
  pageSize:3,
  currentPage:1,
  totalProducts:0,
  status:"",
  errorMessage:""
}
  public authState:any={
  username:undefined,password:undefined,roles:undefined,isAuthenticated:false,token:undefined
  }
  constructor() { }
  public setProductState(state:any):void{
    this.productState={...this.productState,...state}
    console.log("verifier les donnees de state",this.productState)
  }
  public setAuthState(state:any){
  this.authState={...this.authState,...state}
  }
}
