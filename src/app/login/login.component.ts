import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  error = null;

  ngOnInit(): void {
    
  }

  googleLogin(){
    this.authService.logInWithGoogle();
  }

}
