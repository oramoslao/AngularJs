angular.module("App").controller("PostEditController", PostEditController);

PostEditController.$inject = [
  "$scope",
  "$routeParams",
  "$location",
  "PostService",
];

function PostEditController($scope, $routeParams, $location, PostService) {
  var self = this;

  self.title = "Edit Post";
  self.isEdited = true;
  self.post = null;
  self.update = update;

  loadPost();

  function update(post) {
    PostService.updatePost($routeParams.id, post).then(function () {
      $scope.$apply(function () {
        $location.path("posts");
      });
    });
  }

  function loadPost() {
    PostService.getPost($routeParams.id).then(function (post) {
      $scope.$apply(function () {
        self.post = post;
      });
    });
  }
}
