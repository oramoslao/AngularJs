angular.module("App").directive("routeActive", routeActive);

function routeActive() {
  return {
    link: linkFunc,
  };

  function linkFunc(scope, element, attrs) {
    scope.$on("$routeChangeSuccess", function (e, current, previous) {
      var linkElement = element.find("a");
      linkElement.removeClass(attrs.routeActive);
      if (linkElement.attr("href") === "#" + current.originalPath) {
        linkElement.addClass(attrs.routeActive);
      }
    });
  }
}
