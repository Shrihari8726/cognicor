import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cards = [
    { cardTitle: "Cancelled Flights", cardData: "8 886", davPast: '0' },
    { cardTitle: "# of Scheduled Flights", cardData: "450 017", davPast: '0' },
    { cardTitle: "D0", cardData: "61%", davPast: '0%' },
    { cardTitle: "D15", cardData: "78%", davPast: '0%' },
    { cardTitle: "A0", cardData: "59%", davPast: '0%' },
    { cardTitle: "Distance Traveled", cardData: "383,5M" }
  ];

  ngOnInit(): void {
  }

}
