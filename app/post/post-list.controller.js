angular.module("App").controller("PostListController", PostAddController);

PostAddController.$inject = ["PostService"];

function PostAddController(PostService) {
  var self = this;

  self.title = "Posts";
  self.posts = [];

  PostService.getPosts().then(function (response) {
    console.log(response);
    self.posts = response.data || [];
  });
}
