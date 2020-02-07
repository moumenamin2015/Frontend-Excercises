import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "detail/:name", component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
