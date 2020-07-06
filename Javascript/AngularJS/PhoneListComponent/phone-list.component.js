function PhoneListController($scope) {
  this.model = {};
  this.model.phoneName = "";
  this.model.phoneSnippet = "";
  this.phones = [
    {
      name: "Nexus S",
      snippet: "Fast just got faster with Nexus S.",
    },
    {
      name: "Motorola XOOM™ with Wi-Fi",
      snippet: "The Next, Next Generation tablet.",
    },
    {
      name: "MOTOROLA XOOM™",
      snippet: "The Next, Next Generation tablet.",
    },
  ];
  this.AddPhone = function () {
    alert("clicked");
    this.phones.push({
      name: this.model.phoneName,
      snippet: this.model.phoneSnippet,
    });
    this.model.phoneName = "";
    this.model.phoneSnippet = "";
  };

  var self = this;
  this.$onInit = function () {
    this.ngModel.$render = function () {
      self.model = self.ngModel.$viewValue;
    };
    $scope.$watch(
      function () {
        return self.model;
      },
      function (value) {
        self.ngModel.$setViewValue(value);
      }
    );
  };
}
mainApp.component("phoneList", {
  templateUrl: "PhoneListComponent/phoneList.html",
  require: {
    ngModel: "^ngModel",
  },
  controller: PhoneListController,
  controllerAs: "vm",
});
