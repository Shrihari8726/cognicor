import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {User} from '../../interfaces/User'
import firebase from 'firebase/app';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: User;
  private _userDetails = new Subject<object>();
  userDetails$ = this._userDetails.asObservable();
  constructor(private fireAuth: AngularFireAuth, private router: Router) { 
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    })
  }

  async logInWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this._userDetails.next(res.user);
      this.router.navigate(['/home']);
    }).catch((err) => {
      alert(err.message);
    });
  }

  async logInWithEmail(obj){
    console.log(obj)
    await this.fireAuth.signInWithEmailAndPassword(obj.email, obj.password).then(res => {
      this._userDetails.next(res.user);
      this.router.navigate(['/home']);
    }).catch((err) => {

      alert(err.message);
    });
  }

}
