import { Component } from '@angular/core';
import {AppstateService} from "../../services/appstate.service";
@Component({
  selector: 'app-app-errors',
  templateUrl: './app-errors.component.html',
  styleUrl: './app-errors.component.css'
})
export class AppErrorsComponent {
  constructor(public appstate:AppstateService) {

  }
}
