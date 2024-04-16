import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!:FormGroup
  errorMessage!:any
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService) {
  }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control(""),
    })
  }

  handleLogin() {
    let username=this.formLogin.value.username;
    let password=this.formLogin.value.password;
    this.authservice.login(username,password).then(value => {
      console.log(" ça passe bien ")
      this.router.navigateByUrl("/admin")
    }).catch(reason => {
      console.log("error dans la requete")
      this.errorMessage=reason;
    })

  }
}
