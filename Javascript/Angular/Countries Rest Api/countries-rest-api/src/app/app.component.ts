import { Component, OnInit } from "@angular/core";
import { CountryService } from "./country.service";
import { country } from "./country";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "countries-rest-api";
  countries: country[];
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.countryService.getCountries().subscribe(response => {
      console.log(response);
      this.countries = response;
      // this.countries = response.map(item => {
      //   return new country(
      //     item.name,
      //     item.flag,
      //     item.population,
      //     item.capital,
      //     item.region
      //   );
      // });
      console.log(this.countries);
    });
  }
}
