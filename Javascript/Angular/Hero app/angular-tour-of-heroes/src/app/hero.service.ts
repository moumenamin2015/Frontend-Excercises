import { MessageService } from "./message.service";
import { Injectable } from "@angular/core";
import { Hero } from "./heroes/hero";
import { HEROES } from "./mock-heroes";
import { of, Observable } from "rxjs";

// @Injectable({
//   providedIn: "root"
// })
export class HeroService {
  constructor(private MessageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    this.MessageService.add("Fetching heroes..");
    return of(HEROES);
  }
  getHeroById(id: number) {
    this.MessageService.add("Fetching hero with id" + id);
    return of(HEROES.find(h => h.id === id));
  }
}
