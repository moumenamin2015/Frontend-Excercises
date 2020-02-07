import { Component, OnInit } from "@angular/core";
import { country } from "../country";
import { CountryService } from "../country.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"]
})
export class CountriesComponent implements OnInit {
  countries: country[];
  allCountries: country[];
  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
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
  filterCountries(searchText: string = "", region: string = "") {
    this.countries = this.allCountries
      .filter(
        country =>
          searchText === "" ||
          country.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter(
        country =>
          region === "" || country.region.toLowerCase() === region.toLowerCase()
      );
  }
  details(countryName: string) {
    this.router.navigate(["/details", countryName]);
  }
}
