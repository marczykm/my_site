app.controller('FooterCtrl', function($scope, $timeout, $mdBottomSheet){
    $scope.bottomSheetItems = [
        {
            icon: 'img/icon/linkedin.svg',
            label: 'LinkedIn',
            url: 'https://pl.linkedin.com/pub/marcin-marczyk/59/884/a64',
            color: '#0097B9',
            tooltip: 'check me on LinkedId'
        },
        {
            icon: 'img/icon/facebook.svg',
            label: 'Facebook',
            url: 'https://www.facebook.com/marczyk.marcin',
            color: '#47639E',
            tooltip: 'check me on Facebook'
        },
        {
            icon: 'img/icon/google_plus.svg',
            label: 'Google+',
            url: 'https://plus.google.com/+MarcinMarczyk89',
            color: '#D44132',
            tooltip: 'check me on Google+'
        },
        {
            icon: 'img/icon/github.svg',
            label: 'GitHub',
            url: 'https://github.com/marczykm?tab=repositories',
            color: '#777777',
            tooltip: 'check my projects on GitHub'
        },
        {
            icon: 'img/icon/mail.svg',
            label: 'Email',
            url: 'mailto:m.l.marczyk@gmail.com',
            color: '#4AB367',
            tooltip: 'send me an email'
        },
//        {
//            icon: 'img/icon/cv.svg',
//            label: 'CV',
//            url: 'docs/cv_marczyk_en.pdf',
//            color: '#FFB404',
//            tooltip: 'get my CV'
//        },
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