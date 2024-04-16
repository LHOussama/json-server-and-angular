import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../../services/product-service.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  public productForm!:FormGroup;
  constructor( private fb:FormBuilder,private productService:ProductServiceService) {
  }
  ngOnInit(): void {
    this.productForm=this.fb.group({
      name:this.fb.control('',Validators.required),
      price:this.fb.control('',Validators.min(1000)),
      checked:this.fb.control(false),
    })
  }

  saveProduct() {
  let product=this.productForm.value;
  this.productService.save(product).subscribe({
    next:value => alert(JSON.stringify(value))
    ,error:err => console.error("erreur de la methode d ajout")
  })
  }
}
