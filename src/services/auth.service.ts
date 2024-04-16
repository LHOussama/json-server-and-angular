import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {AppstateService} from "./appstate.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private appState:AppstateService) { }
   async login(username:string,password:string){
    let user:any= await firstValueFrom(  this.http.get("http://localhost:3000/users/"+username))
     if(password==atob(user.password)){
       let decodedJwt:any=jwtDecode(user.token);
       console.log(decodedJwt)
       console.log(decodedJwt.sub)
       this.appState.setAuthState({
         isAuthenticated:true,
         username:decodedJwt.firstname,
          role:decodedJwt.roles,
         token:user.token
       })
       return Promise.resolve(true)
     }
     else{
       return Promise.reject("Bad crendentials")
     }
  }
}
