import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) {
    
   }
  showButton: boolean = false;
  userName: string = null;
  ngOnInit(): void {
    this.authService.userDetails$
      .subscribe(user => {
        this.userName = user['displayName'];
        this.showButton = true;
      })
  }

}
