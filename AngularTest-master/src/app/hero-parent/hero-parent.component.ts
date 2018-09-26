import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  heroesP = HEROES;
  masterP = 'Master';
    constructor() { }

  ngOnInit() {
  }

}
