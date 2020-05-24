angular.module("App").controller("PostAddController", PostAddController);

PostAddController.$inject = ["$scope", "$location", "PostService"];

function PostAddController($scope, $location, PostService) {
  var self = this;

  self.title = "Add Post";
  self.submit = submit;

  function submit(post) {
    PostService.addPost(post).then(function () {
      $scope.$apply(function () {
        $location.path("posts");
      });
    });
  }
}
