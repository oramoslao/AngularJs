angular.module("App").controller("PostAddController", PostAddController);

PostAddController.$inject = ["PostService"];

function PostAddController(PostService) {
  var self = this;

  self.title = "Add Post";
  self.post = {};
  self.submit = submit;

  function submit() {
    if (self.addForm.$invalid) return;

    console.log(self.post);

    PostService.addPost(self.post).then(function (response) {
      console.log(response);
    });
  }
}
