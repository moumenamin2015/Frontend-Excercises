import { HEROES } from "./../../mock-heroes";
import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = null;
  selectedHero: Hero = null;
  constructor() {}

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  updateSelectedHero() {
    let hero: Hero = this.heroes.find(h => h.id == this.selectedHero.id);
    hero.name = this.selectedHero.name;
    this.selectedHero = null;
  }
}
