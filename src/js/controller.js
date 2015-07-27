var qbr = angular.module("reportmaker-ms", ["angucomplete-alt"]);

qbr.controller('ReportController', ['$scope', '$rootScope', function($scope, $rootScope) {

  // Underscore library
  $scope._ = _;

  $scope.worlds = ["Scania", "Bera", "Windia", "Khaini", "Broa", "Mardia", "Yellonde", "Bellocan", "Chaos", "Kradia", "Nova", "Galicia", "Renegades", "Arcania", "Zenith", "El Nido", "Demethos"];

  if (localStorage.getItem('ign')) $scope.ign = localStorage.getItem('ign');
  if (localStorage.getItem('world')) $scope.world = localStorage.getItem('world');

  // Popular bot hangout maps.
  $scope.maps = [
  {name: "Hidden Street: Free Market Entrance"},
  {name: "Hidden Street: Free Market<7>"},
  {name: "Henesys: Henesys"},
  {name: "North Forest: Green Tree Trunk"},
  {name: "North Forest: North Forest Lot"},
  {name: "North Forest: Young Tree Forest"},
  {name: "North Forest: Giant Tree"},
  {name: "Perion: Burning Heat"},
  {name: "Perion: Ash-Covered Land"},
  {name: "Dark Ereve: First Drill Hall"}
  {name: "Dark Ereve: Second Drill Hall"}
  ];

  // Use PST, timezone at Nexon America HQ
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');

  $scope.getTime = function() {
    return moment().tz("America/Los_Angeles").format("l LTS") + " PST";
  };

  $scope.clear = function() {
    $scope.bot = null;
    $rootScope.$broadcast('angucomplete-alt:clearInput');
  };

  $scope.saveInfo = function() {
    if (Modernizr.localstorage) {
      localStorage.setItem('ign', $scope.ign);
      localStorage.setItem('world', $scope.world);
      alert("Information saved.");
    } else {
      alert("Your browser does not support HTML5 LocalStorage. Please update your browser.");
    }
  };

}]);