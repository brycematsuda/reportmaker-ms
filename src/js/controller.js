var qbr = angular.module("reportmaker-ms", ["angucomplete-alt"]);

qbr.controller('ReportController', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  // Underscore library
  $scope._ = _;

  $scope.ign = "SoundVoltex";
  $scope.world = "Galicia";

  // Popular bot hangout maps.
  $scope.maps = [
  {name: "Hidden Street: Free Market Entrance"},
  {name: "Hidden Street: Free Market<7>"},
  {name: "Henesys: Henesys"},
  {name: "North Forest: Green Tree Trunk"},
  {name: "North Forest: North Forest Lot"},
  {name: "North Forest: Young Tree Forest"},
  {name: "North Forest: Giant Tree"}
  ];

  // Use PST, timezone at Nexon America HQ
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');

  $scope.getTime = function() {
    return moment().tz("America/Los_Angeles").format("l LTS") + " PST";
  };

  // Clear form
  $scope.clear = function() {
    $scope.bot = null;
    $rootScope.$broadcast('angucomplete-alt:clearInput');
  };
}]);