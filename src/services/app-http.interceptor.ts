import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {finalize, Observable} from "rxjs";
import {AppstateService} from "./appstate.service";
import {LaodingService} from "./laoding.service";
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
  constructor(private loadingService:LaodingService) {
  /*  this.appstate.setProductState({
      status:"LOADING"
    })*/
    this.loadingService.showLoadingSpiner()
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request=req.clone({
      headers:req.headers.set("Authorization","Bear JWT")
    })
    return next.handle(request).pipe(finalize (() => {
      /*this.appstate.setProductState({
        status:"LOADED"
      })*/
      this.loadingService.hiddenLoadingSpiner()
    }))
  }

}
