import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router }  from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    
   }
  showButton: boolean = false;
  userName: string = null;
  ngOnInit(): void {
    if(localStorage.getItem('userKey')){

      this.userName = localStorage.getItem('displayName') ? localStorage.getItem('displayName') : localStorage.getItem('emaiil')
      this.showButton = true;
    } else {
    this.authService.userDetails$
      .subscribe(user => {
        if(user['displayName']!= null){
          this.userName = user['displayName'];
        } else {
          this.userName = user['email'];
          
        }
        localStorage.setItem('userKey',user['uid']);
        localStorage.setItem('displayName', user['displayName']);
        localStorage.setItem('email',user['email']);
        localStorage.setItem('photoURL',user['photoURL'])
 
        this.showButton = true;
      })
    }
  }

  toLogout(){
    this.userName = null;
    this.showButton = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  toPriflePage(){
    this.router.navigate(['/profile']);
  }
}
