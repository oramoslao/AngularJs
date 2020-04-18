var myApp = angular.module("MyApp", []);

myApp.controller("HomeCtr", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.users = [
    { name: "Octavio", enabled: true },
    { name: "Raul", enabled: false },
    { name: "Maria", enabled: true },
    { name: "Luisa", enabled: false },
  ];
}
