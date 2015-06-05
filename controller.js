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
            'Education',
            'Career', 
            'Projects so far',
            'Hobbys',
            'Contact'
        ];

        $scope.closeMenu = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

app.controller('FooterCtrl', function($scope, $timeout, $mdBottomSheet){
    $scope.bottomSheetItems = [
        {
            icon: 'img/icon/linkedin.svg',
            label: 'LinkedIn',
            url: 'https://pl.linkedin.com/pub/marcin-marczyk/59/884/a64',
            color: '#0097B9'
        },
        {
            icon: 'img/icon/facebook.svg',
            label: 'Facebook',
            url: 'https://www.facebook.com/marczyk.marcin',
            color: '#47639E'
        },
        {
            icon: 'img/icon/google_plus.svg',
            label: 'Google+',
            url: 'https://plus.google.com/+MarcinMarczyk89',
            color: '#D44132'
        },
        {
            icon: 'img/icon/github.svg',
            label: 'GitHub',
            url: 'https://github.com/marczykm?tab=repositories',
            color: '#777777'
        },
        {
            icon: 'img/icon/mail.svg',
            label: 'E-mail',
            url: 'mailto:m.l.marczyk@gmail.com',
            color: '#4AB367'
        },
    ];

    $scope.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'templates/bottom-sheet-grid-template.html',
            controller: 'FooterCtrl',
            targetEvent: $event
        });
    };

    $scope.redirect = function(url){
        var win = window.open(url, '_blank');
        win.focus();
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
