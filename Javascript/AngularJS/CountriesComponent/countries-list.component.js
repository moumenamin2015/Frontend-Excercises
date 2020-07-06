function CountriesListController($http, CountriesService) {
  var self = this;
  this.countries = [];
  this.countryName = "";

  this.$onInit = function () {
    CountriesService.getCountries(function (response) {
      self.countries = response;
      console.log(self.countries);
    });
  };

  this.addCountry = function () {
    this.countries.push({ name: `${self.title} ${self.countryName}` });
    self.countryName = "";
  };
}
mainApp.component("countriesList", {
  templateUrl: "CountriesComponent/countriesList.html",
  bindings: {
    title: "<",
  },
  controller: CountriesListController,
  controllerAs: "vm",
});
