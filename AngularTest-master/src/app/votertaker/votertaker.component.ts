import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votertaker',
  templateUrl: './votertaker.component.html',
  styleUrls: ['./votertaker.component.css']
})
export class VotertakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  constructor() { }

  ngOnInit() {
  }

}
