angular.module("App").factory("PostService", PostService);

PostService.$inject = [];

function PostService() {
  var collection = db.collection("posts");

  var service = {
    getPosts: getPosts,
    getPost: getPost,
    addPost: addPost,
    updatePost: updatePost,
    deletePost: deletePost,
  };

  return service;

  function addPost(post) {
    return collection.add(post);
  }

  function getPosts() {
    return collection.get().then(function (snapshot) {
      return snapshot.docs.map((doc) => {
        return angular.extend({}, { id: doc.id }, doc.data());
      });
    });
  }

  function getPost(id) {
    return collection
      .doc(id)
      .get()
      .then(function (doc) {
        return angular.extend({}, { id: doc.id }, doc.data());
      });
  }

  function updatePost(id, post) {
    return collection.doc(id).update(post);
  }

  function deletePost(id) {
    return collection.doc(id).delete();
  }
}
