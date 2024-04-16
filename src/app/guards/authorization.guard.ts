import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router'
import {AppstateService} from "../../services/appstate.service";
@Injectable()
export  class AuthorizationGuard{
  constructor(private router:Router,private appState:AppstateService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(route.data['requiredRoles'])
   if(this.appState.authState.role.includes(route.data['requiredRoles'].toString()))
     return true

   else{
     this.router.navigateByUrl("/admin/notAuthorized")
     return  false
   }
  }
}
