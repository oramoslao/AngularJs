angular.module("App").config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "app/home/home.controller.html",
        controller: "HomeController",
      })
      .when("/blog", {
        templateUrl: "app/blog/blog.html",
      })
      .when("/about", {
        templateUrl: "app/about/about.html",
      })
      .otherwise({
        redirectTo: "/home",
      });

    $locationProvider.hashPrefix("");
  },
]);
