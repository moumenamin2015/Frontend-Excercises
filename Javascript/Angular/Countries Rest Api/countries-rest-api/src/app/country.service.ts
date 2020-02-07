import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { country } from "./country";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private baseApiUrl: string = "https://restcountries.eu/";
  constructor(private http: HttpClient) {}

  getCountries(): Observable<country[]> {
    return this.http.get<country[]>(this.baseApiUrl + "rest/v2/all");
  }
  getCountryByName(countryName: string): Observable<country[]> {
    return this.http.get<country[]>(
      this.baseApiUrl + `rest/v2/name/${countryName}?fullText=True`
    );
  }
}
