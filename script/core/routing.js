app.config( function($routeProvider, $locationProvider){
    var baseUrl = '/script/core';
    $routeProvider
        .when('/',
        {
            templateUrl: baseUrl+'/default/default.html',
            controller: 'DefaultCtrl'
        })
        .when('/education',
        {
            templateUrl: baseUrl+'/education/education.html',
            controller: 'EducationCtrl'
        })
        .when('/career',
        {
            templateUrl: baseUrl+'/career/career.html',
            controller: 'CareerCtrl'
        })
        .when('/projects',
        {
            templateUrl: baseUrl+'/projects/projects.html',
            controller: 'ProjectsCtrl'
        })
        .when('/hobby',
        {
            templateUrl: baseUrl+'/hobby/hobby.html',
            controller: 'HobbyCtrl'
        })
        .when('/contact',
        {
            templateUrl: baseUrl+'/contact/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});