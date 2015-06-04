var app = angular.module('app', ['ngMaterial', 'ngMessages']);
app.controller('SimpleCtrl', ['$scope', function($scope){
    $scope.message = {sentence: 'swiecie!'};

    $scope.deleteElement = function(){
        console.log('Element usunięty!');
    }

    $scope.submitForm = function(){
        console.log('Form submitted with : ' + $scope.message.sentence);
    }
}]);

app.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
