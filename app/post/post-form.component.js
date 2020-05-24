angular.module("App").component("postForm", {
  templateUrl: "app/post/post-form.component.html",
  controller: PostFormController,
  bindings: {
    title: "@",
    callback: "&",
    isEdited: "<?",
    post: "<?",
  },
});

/**
 * = Two-way data binding. This means that if you update that variable in your component scope, the change will be reflected on the parent scope;
 * < One-way bindings when we just want to read a value from a parent scope and not update it;
 * @ This is for string parameters;
 * & This is for callbacks in case your component needs to output something to its parent scope.
 */

PostFormController.$inject = [];

function PostFormController() {
  var self = this;

  self.$onInit = onInit;
  self.submit = submit;

  function submit() {
    if (self.addForm.$invalid) return;

    console.log(self.post);

    self.callback({ post: self.post });
  }

  function onInit() {
    console.log(self.title);
    self.isEdited = self.isEdited || false;
    self.post = self.post || {};
  }
}
