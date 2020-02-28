import { Component, OnInit, Input } from "@angular/core";
import { country } from "../country";
import { CountryService } from "../country.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"]
})
export class CountryDetailsComponent implements OnInit {
  country: country;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.getCountryDetailsByName();
  }
  getCountryDetailsByName() {
    const name = this.route.snapshot.paramMap.get("name");
    this.countryService.getCountryByName(name).subscribe(response => {
      this.country = response[0];
      console.log(this.country);
    });
  }
  getCountryCurrencies() {
    return this.country.currencies.map(c => c.name + " " + c.symbol);
  }
  getCountryLanguages() {
    return this.country.languages.map(l => l.name + " " + l.nativeName);
  }
  goBack() {
    this.router.navigate(["/countries"]);
  }
}
