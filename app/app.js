var myApp = angular.module("MyApp", []);

myApp.controller("HomeCtr", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.user = {
    name: "Octavio",
    lastname: "Ramos La O",
  };
  $scope.format = "M/d/yy h:mm:ss a";
}
//A: Atriburo
//E: Elemento
myApp.directive("fullName", function () {
  return {
    restrict: "AE",
    templateUrl: "views/full-name.html",
    scope: {
      user: "=info",
    },
  };
});

myApp.directive("myCurrentTime", [
  "$interval",
  "dateFilter",
  function ($interval, dateFilter) {
    return {
      link: linkFnc,
    };

    function linkFnc(scope, element, attrs) {
      var format, timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.myCurrentTime, function (newValue, oldValue) {
        format = newValue;
        updateTime();
      });

      element.on("$destroy", function () {
        $interval.cancel(timeoutId);
      });

      // iniciar el proceso de actualización de la interfaz de usuario;
      // guardar el tiempo de espera Id para cancelar
      timeoutId = $interval(function () {
        updateTime();
      }, 1000);
    }
  },
]);
