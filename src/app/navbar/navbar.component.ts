import { Component } from '@angular/core';
import {Action} from "../modules/Action.model";
import {AppstateService} from "../../services/appstate.service";
import {LaodingService} from "../../services/laoding.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public loadingService:LaodingService,public appState:AppstateService,private router:Router) {
  }
  actions:Array<Action>=[
    {title:"home",route:"/admin/home",class:"btn btn-outline-success ms-1",icone:"bi bi-house-check-fill"},
    {title:"Products",route:"/admin/products",class:"btn btn-outline-success ms-1",icone:"bi bi-playstation"},
    {title:"New Product",route:"/admin/new-product",class:"btn btn-outline-success ms-1",icone:"bi bi-playstation"},
  ]
  currentAction!:Action
  setCurrentAction(action:Action) {
    this.currentAction=action;
  }

  logout() {
    this.appState.authState={}
    this.router.navigateByUrl("/login")
  }

  login() {
    this.router.navigateByUrl("/login")
  }
}
