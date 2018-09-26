import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  // hero: Hero = {
  //    id: 1,
  //    name: 'Windstorm'
  // };
  // selectedHero;
  arrayofheroes: Hero[];
  // arrayofheroes = HEROES;
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(i: Hero): void {
  //   this.selectedHero = i;
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.arrayofheroes = heroes  );
  }

}
