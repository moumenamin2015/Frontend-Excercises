import { Component, OnInit } from "@angular/core";
import { CountryService } from "./country.service";
import { country } from "./country";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "countries-rest-api";

  constructor() {}
  ngOnInit(): void {}
}
