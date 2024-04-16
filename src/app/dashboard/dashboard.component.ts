import { Component } from '@angular/core';
import {AppstateService} from "../../services/appstate.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public appState:AppstateService) {

  }
  totalChecked() {
    return this.appState.productState.products.filter((value:any) => value.checked==true).length
  }
}
