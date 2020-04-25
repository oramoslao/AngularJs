var myApp = angular.module("MyApp", []);

myApp.controller("HomeCtr", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.logText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error aspernatur nobis rerum vero iste, sed provident, cum quod, doloribus ea consequatur eaque sequi nihil delectus totam maxime itaque voluptatibus.";
  $scope.users = [
    {
      name: "Octavio",
      lastname: "Ramos La O",
      age: 37,
      amount: 20.45,
    },
    {
      name: "Raul",
      lastname: "Junco",
      age: 27,
      amount: 10,
    },
    {
      name: "Juan",
      lastname: "Perez",
      age: 17,
      amount: 25,
    },
    {
      name: "Maria",
      lastname: "Ramirez",
      age: 20,
      amount: 80,
    },
  ];
}

myApp.directive("fullName", function () {
  return {
    restrict: "AE",
    templateUrl: "views/full-name.html",
    scope: {
      user: "=info",
    },
  };
});
