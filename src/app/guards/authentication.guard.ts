import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {AppstateService} from "../../services/appstate.service";

@Injectable()
export  class AuthenticationGuard{
  constructor(private appState:AppstateService,private router:Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if( this.appState.authState.isAuthenticated==true)
      return true
    else{
      this.router.navigateByUrl("/login")
      return false
    }
  }
}
