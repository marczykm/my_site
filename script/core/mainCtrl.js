var app = angular.module('app', ['ngRoute','ngMaterial', 'ngMessages']);

app.controller('MainCtrl',  
    function($scope, $mdSidenav, $mdUtil, $log, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.themes = 
        [
            'lightGreen',
            // 'darkGreen',
            'lightIndigo',
            // 'darkIndigo',
            'lightRed',
            // 'darkRed',
            'lightYellow',
            // 'darkYellow'
        ];

        $scope.toggleMenu = buildToggler('left');
        $scope.currentThemeIndex = 0;
        $scope.currentTheme = $scope.themes[$scope.currentThemeIndex];

        

        $scope.switchTheme = function(){
            $scope.currentThemeIndex++;
            $scope.currentTheme = $scope.themes[$scope.currentThemeIndex];
            $log.debug($scope.currentThemeIndex);
        }

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




