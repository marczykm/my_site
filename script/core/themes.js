app.config( function($mdThemingProvider){
    $mdThemingProvider.definePalette(
        'yellow', 
        $mdThemingProvider.extendPalette('yellow')
    );
    $mdThemingProvider.theme('darkYellow','default')
        .primaryPalette('yellow')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.theme('lightYellow','default')
        .primaryPalette('yellow')
        .accentPalette('orange');

    $mdThemingProvider.definePalette(
        'red', 
        $mdThemingProvider.extendPalette('red')
    );
    $mdThemingProvider.theme('darkRed','default')
        .primaryPalette('red')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.theme('lightRed','default')
        .primaryPalette('red')
        .accentPalette('orange');

    $mdThemingProvider.definePalette(
        'indigo', 
        $mdThemingProvider.extendPalette('indigo')
    );
    $mdThemingProvider.theme('lightIndigo','default')
        .primaryPalette('indigo')
        .accentPalette('orange');
    $mdThemingProvider.theme('darkIndigo','default')
        .primaryPalette('indigo')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.theme('lightGreen','default')
        .primaryPalette('indigo')
        .accentPalette('pink');

    $mdThemingProvider.definePalette(
        'green', 
        $mdThemingProvider.extendPalette('green')
    );
    $mdThemingProvider.theme('darkGreen','default')
        .primaryPalette('green')
        .accentPalette('orange')
        .dark();

    $mdThemingProvider.theme('lightGreen','default')
        .primaryPalette('green')
        .accentPalette('orange');
});