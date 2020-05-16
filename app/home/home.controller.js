angular.module("App").controller("HomeController", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.title = "Home";
}
