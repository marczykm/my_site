var app = angular.module('app', ['ngMaterial', 'ngMessages']);
app.controller('MainCtrl',  
    function($scope, $mdSidenav, $mdUtil, $log){
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

app.controller('MenuCtrl', 
    function($scope, $mdSidenav, $mdUtil, $log){
        $scope.menu = [
            'Curriculum Vitae', 
            "Projects' description"
        ];

        $scope.closeMenu = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

app.controller('FooterCtrl', function($scope, $timeout, $mdBottomSheet){
    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'templates/bottom-sheet-grid-template.html',
            controller: 'FooterCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.redirectToFacebook = function(){
        var win = window.open("https://www.facebook.com/marczyk.marcin", '_blank');
        win.focus();
    }

    $scope.redirectToLinkedId = function(){
        var win = window.open("https://pl.linkedin.com/pub/marcin-marczyk/59/884/a64", '_blank');
        win.focus();
    }

    $scope.redirectToGooglePlus = function(){
        var win = window.open("https://plus.google.com/+MarcinMarczyk89", '_blank');
        win.focus();
    }

    $scope.redirectToGitHub = function(){
        var win = window.open("https://github.com/marczykm?tab=repositories", '_blank');
        win.focus();
    }

    $scope.sendMail = function(){
        var win = window.open("mailto:m.l.marczyk@gmail.com", '_blank');
    }
});

app.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('custom','default')
        .primaryPalette('yellow')
        .accentPalette('orange')
        .warnPalette('green')
        .backgroundPalette('grey')
        .dark();
  });
