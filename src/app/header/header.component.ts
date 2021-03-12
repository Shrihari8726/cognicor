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
    this.authService.userDetails$
      .subscribe(user => {
        if(user['displayName']!= null){
          this.userName = user['displayName'];
        } else {
          this.userName = user['email'];
        }
 
        this.showButton = true;
      })
  }

  toLogout(){
    this.userName = null;
    this.showButton = false;
    this.router.navigate(['/']);
  }

  toPriflePage(){
    this.router.navigate(['/profile']);
  }
}
