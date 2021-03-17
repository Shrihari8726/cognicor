import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  displayName: string;
  imgSrc: string;
  email: string;
  constructor(private authService: AuthService) { }
  cards = [
    { cardTitle: "Cancelled Flights", cardData: "8 886", davPast: '0' },
    { cardTitle: "# of Scheduled Flights", cardData: "450 017", davPast: '0' },
    { cardTitle: "D0", cardData: "61%", davPast: '0%' },
    { cardTitle: "D15", cardData: "78%", davPast: '0%' },
    { cardTitle: "A0", cardData: "59%", davPast: '0%' },
    { cardTitle: "Distance Traveled", cardData: "383,5M" }
  ];

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
