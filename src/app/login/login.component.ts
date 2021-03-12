import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

import * as firebase from 'firebase'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  LoginForm:FormGroup;

  error = null;

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
          email : new FormControl("",[Validators.required,Validators.email]),
          password : new FormControl("",Validators.required)
    });
  }

  googleLogin(){
    this.authService.logInWithGoogle();
  }

  loginSubmit() {
    this.authService.logInWithEmail(this.LoginForm.value)
  }

}
