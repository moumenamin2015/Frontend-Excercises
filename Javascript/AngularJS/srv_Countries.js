mainApp.service("CountriesService", function ($http, $q) {
  var servicePath = "https://restcountries.eu/";
  this.getCountries = function (sucessCallBack) {
    $http.get(servicePath + "rest/v2/all").success(function (response) {
      if (sucessCallBack) {
        sucessCallBack(response);
      }
    });
  };
});
