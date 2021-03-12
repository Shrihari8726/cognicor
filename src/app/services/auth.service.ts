import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {User} from '../../interfaces/User'
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: User;
  constructor(private fireAuth: AngularFireAuth, private router: Router) { 
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user.displayName)
    })
  }

  async logInWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log(res.user);
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
