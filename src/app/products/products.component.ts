import {Component, OnInit} from '@angular/core';
import {Product} from "../modules/produit.model";
import {ProductServiceService} from "../../services/product-service.service";
import {Router,} from "@angular/router";
import {AppstateService} from "../../services/appstate.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private productService:ProductServiceService,private router:Router,public appState:AppstateService) {
  }
  ngOnInit(): void {
    this.getProducts()
  }
  handelChecked(prod: Product) {
      this.productService.checkProduct(prod).subscribe({
      next:value => {
        this.appState.productState.products.map((value1:any)=> {
          if(value1.id==value.id)
            value1.checked=!value1.checked
        })
      },
      error:err => console.error("erreur dans la methode checkhandle")
    })
  }
  getProducts(){
    //this.appState.setProductState({status:"LOADING"})
    this.productService.getProducts(this.appState.productState.keyword,this.appState.productState.currentPage,this.appState.productState.pageSize).subscribe({
      "next": value => {
        let products=value.body as Product[];
        let totalProducts:number=parseInt(value.headers.get("x-total-count")!);
        this.appState.productState.totalProducts=totalProducts;
        console.log("totalPages :",totalProducts)
        let totalPages=Math.floor(totalProducts/this.appState.productState.pageSize);
        console.log("totalPages",this.appState.productState.totalPages)
        if(totalProducts%this.appState.productState.pageSize!=0)
          totalPages+=1
        console.log("totalPages",this.appState.productState.totalPages)
        this.appState.setProductState({
          "products":products, "totalProducts":totalProducts, "totalPages":totalPages, "status":"LOADED"
        })
      },
      "error": err => {this.appState.setProductState({"status":"ERROR", "errorMessage":err})
        console.log(err.errorMessage)
      }
    })
  }
  handDelete(prod: Product) {
    if(confirm("Etes vous sure ?")){
    this.productService.deleteProduct(prod).subscribe({
      next:value => {
        this.appState.productState.products=this.appState.productState.products.filter((value1:any) => value1.id!=prod.id)
        console.log("taille du tableau ",this.appState.productState.products.length)
        if(this.appState.productState.products.length==0){
          this.appState.productState.currentPage=this.appState.productState.currentPage-1;
          this.getProducts();
        }
        else
          this.getProducts();
      }
         ,
      error:err => console.error("erreur dans la methode de suppression")
    })
  }}
  handleGoToPage(page: number) {
    this.appState.productState.currentPage=page
    this.getProducts();
  }

  handeEdit(prod: Product) {
  this.router.navigateByUrl(`/admin/editProducts/${prod.id}`)
  }
}
