var app = angular.module('app', ['ngRoute','ngMaterial', 'ngMessages']);

app.controller('MainCtrl',  
    function($scope, $mdSidenav, $mdUtil, $log, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.toggleMenu = buildToggler('left');
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                },300);
            return debounceFn;
        }
    });




