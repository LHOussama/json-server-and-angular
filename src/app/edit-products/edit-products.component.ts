import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServiceService} from "../../services/product-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../modules/produit.model";
@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css'
})
export class EditProductsComponent implements OnInit{
  public productFormGroup!:FormGroup
  public productId!:number;
  constructor(private route:ActivatedRoute,private productService:ProductServiceService,private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.productId=this.route.snapshot.params["id"];
    this.productService.getProductsById(this.productId).subscribe({
      next:value => {
        this.productFormGroup=this.fb.group({
        id:this.fb.control(value.id), name:this.fb.control(value.name), checked:this.fb.control(value.checked),price:this.fb.control(value.price)
        })

      }, error:err => console.error("erreur dans la methode edit")
    })
  }

  updateProduct() {
    let product:Product=this.productFormGroup.value
    this.productService.updateProduct(product).subscribe({
      next:value => alert(JSON.stringify(value))
    })
  }

}
