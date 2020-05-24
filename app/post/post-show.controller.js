angular.module("App").controller("PostShowController", PostShowController);

PostShowController.$inject = ["$scope", "$routeParams", "PostService"];

function PostShowController($scope, $routeParams, PostService) {
  var self = this;
  self.post = null;

  PostService.getPost($routeParams.id).then(function (post) {
    console.log(post);
    $scope.$apply(function () {
      self.post = post;
    });
  });
}
