app.controller('EducationCtrl', function($scope, $routeParams) {
    $scope.name = "EducationCtrl";
    $scope.params = $routeParams;

    $scope.schools = [
        {
            name: 'Technical University of Wrocław',
            degree: "Master's degree",
            department: 'Computer Science',
            years: '2013-2015'
        },
        {
            name: 'Technical University of Wrocław',
            degree: "Bachelor of Engineering",
            department: 'Computer Science',
            years: '2009-2013'
        }
    ];
 })