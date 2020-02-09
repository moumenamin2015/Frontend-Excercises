export class country {
  name: string;
  flag: string;
  population: string;
  capital: string;
  region: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  constructor(name, flag, population, capital, region) {
    this.name = name;
    this.flag = flag;
    this.population = population;
    this.capital = capital;
    this.region = region;
  }
}
