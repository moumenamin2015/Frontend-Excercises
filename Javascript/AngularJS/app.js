var mainApp = angular.module("phonecatApp", ["ngLoadScript"]);

// mainApp.register = {
//   component: $compileProvider.component,
//   controller: $controllerProvider.register,
//   directive: $compileProvider.directive,
//   filter: $filterProvider.register,
//   factory: $provide.factory,
//   service: $provide.service,
// };

mainApp.config(function ($controllerProvider, $provide, $compileProvider) {
  // Since the "shorthand" methods for component
  // definitions are no longer valid, we can just
  // override them to use the providers for post-
  // bootstrap loading.
  console.log("Config method executed.");

  // Let's keep the older references.
  mainApp._component = mainApp.component;

  // Provider-based controller.
  mainApp.component = function (name, constructor) {
    $compileProvider.component(name, constructor);
    return this;
  };
});

mainApp.controller("MyCtrl", function ($scope) {
  $scope.phoneData = {
    phoneName: "xiaomi",
    phoneSnippet: "mi 9 lite",
  };
  $scope.showPhoneComponent = false;
  $scope.showCountriesComponent = false;
  $scope.title = "Countries List From Parent";
});
LoadJS = function (src) {
  var jsLink = $("<script type='text/javascript' src='" + src + "'>");
  $("head").append(jsLink);
};
