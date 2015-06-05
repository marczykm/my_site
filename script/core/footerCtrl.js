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
            templateUrl: 'script/core/bottom-sheet-grid-template.html',
            controller: 'FooterCtrl',
            targetEvent: $event
        });
    };

    $scope.redirect = function(url){
        var win = window.open(url, '_blank');
        win.focus();
    }
});