app.config( function($mdThemingProvider){
    $mdThemingProvider.definePalette(
        'yellow', 
        $mdThemingProvider.extendPalette('yellow')
    );
    $mdThemingProvider.theme('darkYellow','default')
        .primaryPalette('yellow')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.definePalette(
        'red', 
        $mdThemingProvider.extendPalette('red')
    );
    $mdThemingProvider.theme('darkRed','default')
        .primaryPalette('red')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.definePalette(
        'indigo', 
        $mdThemingProvider.extendPalette('indigo')
    );
    $mdThemingProvider.theme('darkIndigo','default')
        .primaryPalette('indigo')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.theme('lightIndigo','default')
        .primaryPalette('indigo')
        .accentPalette('pink');
});