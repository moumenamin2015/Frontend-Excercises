import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { AppComponent } from "./app.component";
import { CountriesComponent } from "./countries/countries.component";

const routes: Routes = [
  { path: "", redirectTo: "/countries", pathMatch: "full" },
  { path: "countries", component: CountriesComponent },
  { path: "details/:name", component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
