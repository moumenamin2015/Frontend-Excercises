import { Hero } from "./../heroes/hero";
import { Component, OnInit, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHeroById(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.router.navigate(["heroes"]);
  }
}
