angular.module("App").config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "app/home/home.controller.html",
        controller: "HomeController",
      })
      .when("/posts", {
        templateUrl: "app/post/post-list.controller.html",
        controller: "PostListController",
        controllerAs: "$ctrl",
      })
      .when("/posts/add", {
        templateUrl: "app/post/post-add.controller.html",
        controller: "PostAddController",
        controllerAs: "$ctrl",
      })
      .when("/posts/:id/edit", {
        templateUrl: "app/post/post-edit.controller.html",
        controller: "PostEditController",
        controllerAs: "$ctrl",
      })
      .when("/posts/:id", {
        templateUrl: "app/post/post-show.controller.html",
        controller: "PostShowController",
        controllerAs: "$ctrl",
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
