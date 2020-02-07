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
  countries: country[];
  allCountries: country[];
  constructor(private countryService: CountryService, private router: Router) {}
  ngOnInit(): void {
    this.getCountries();
  }
  getCountries() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response.map(item => {
        return new country(
          item.name,
          item.flag,
          item.population,
          item.capital,
          item.region
        );
      });
      this.allCountries = this.countries;
      console.log(this.countries);
    });
  }
  filterCountries(searchText: string) {
    if (searchText) {
      this.countries = this.allCountries.filter(country =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.countries = this.allCountries;
    }
  }
  details(countryName: string) {
    this.router.navigate(["/details", countryName]);
  }
}
