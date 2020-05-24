angular.module("App").controller("PostListController", PostListController);

PostListController.$inject = ["$scope", "PostService"];

function PostListController($scope, PostService) {
  var self = this;

  self.title = "Posts";
  self.posts = [];
  self.delete = deletePost;

  loadPosts();

  function deletePost(id) {
    PostService.deletePost(id).then(function () {
      loadPosts();
    });
  }

  function loadPosts() {
    PostService.getPosts().then(function (posts) {
      $scope.$apply(function () {
        self.posts = posts || [];
      });
    });
  }
}
