angular.module("App").controller("PostShowController", PostShowController);

PostShowController.$inject = ["$routeParams", "PostService"];

function PostShowController($routeParams, PostService) {
  var self = this;
  self.post = null;

  console.log($routeParams);

  PostService.getPost($routeParams.id).then(function (response) {
    console.log(response);
    self.post = response.data;
  });
}
