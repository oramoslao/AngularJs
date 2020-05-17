angular.module("App").factory("PostService", PostService);

PostService.$inject = ["$http"];

function PostService($http) {
  var service = {
    getPosts: getPosts,
    getPost: getPost,
    addPost: addPost,
  };

  return service;

  function addPost(post) {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var data = {
      title: post.title,
      body: post.body,
      userId: 1,
    };

    return $http.post(url, data);
  }

  function getPosts() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    return $http.get(url);
  }

  function getPost(id) {
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    return $http.get(url);
  }
}
