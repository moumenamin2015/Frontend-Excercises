import { Component, OnInit, Input } from "@angular/core";
import { country } from "../country";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"]
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: country;
  constructor() {}

  ngOnInit() {}
}
