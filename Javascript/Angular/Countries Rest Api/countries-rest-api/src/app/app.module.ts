import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [AppComponent, CountryDetailsComponent, CountriesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
