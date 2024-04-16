import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LaodingService {
  public  isLoading$=new Subject<boolean>()
  constructor() { }
  showLoadingSpiner(){
    this.isLoading$.next(true)
  }
  hiddenLoadingSpiner(){
    this.isLoading$.next(false)
  }
}
