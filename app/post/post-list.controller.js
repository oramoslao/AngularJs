angular.module("App").controller("PostListController", PostListController);

PostListController.$inject = ["PostService"];

function PostListController(PostService) {
  var self = this;

  self.title = "Posts";
  self.posts = [];

  PostService.getPosts().then(function (response) {
    console.log(response);
    self.posts = response.data || [];
  });
}
