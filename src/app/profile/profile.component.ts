import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  displayName: string = '';
  imgSrc:string = '';
  email:string = '';
  ngOnInit(): void {
    if(this.authService.user){
      this.displayName = this.authService.user['displayName'];
      this.imgSrc = this.authService.user['photoURL'] ? this.authService.user['photoURL'] : 'http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png';
      this.email = this.authService.user['email'];
    } else {
      this.displayName = localStorage.getItem('displayName');
      this.imgSrc = localStorage.getItem('photoURL') ? localStorage.getItem('photoURL') : 'http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png';
      this.email = localStorage.getItem('email');
    }
  }

}
