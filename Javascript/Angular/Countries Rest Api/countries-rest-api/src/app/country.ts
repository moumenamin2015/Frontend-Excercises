export class country {
  name: string;
  flag: string;
  population: string;
  capital: string;
  region: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: object[];
  languages: object[];
  constructor(name, flag, population, capital, region) {
    this.name = name;
    this.flag = flag;
    this.population = population;
    this.capital = capital;
    this.region = region;
  }
}
