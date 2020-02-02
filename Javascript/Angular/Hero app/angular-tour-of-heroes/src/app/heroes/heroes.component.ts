import { HeroService } from "./../hero.service";
import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { Router } from "@angular/router";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = null;
  selectedHero: Hero = null;
  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.router.navigate(["/detail", hero.id, { asd: hero.id, foo: "foo" }]);
    this.selectedHero = hero;
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  updateSelectedHero() {
    let hero: Hero = this.heroes.find(h => h.id == this.selectedHero.id);
    hero.name = this.selectedHero.name;
    this.selectedHero = null;
  }
}
