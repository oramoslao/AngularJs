var myApp = angular.module("MyApp", []);

myApp.controller("HomeCtr", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.user = {
    name: "Octavio",
    lastname: "Ramos La O",
  };
}
//A: Atriburo
//E: Elemento
myApp.directive("fullName", function () {
  return {
    restrict: "AE",
    template: "Nombre completo: {{ user.name }} {{ user.lastname }}",
    scope: {
      user: "=info",
    },
  };
});
