app.controller('MenuCtrl', 
    function($scope, $mdSidenav, $mdUtil, $log){
        var hash_slash = '#/';

        $scope.menu = [
            {
                label: 'Home',
                url: hash_slash
            },
            {
                label: 'Education',
                url: hash_slash+'education'
            },
            {
                label: 'Career',
                url: hash_slash+'career'
            },
            {
                label: 'Projects so far',
                url: hash_slash+'projects'
            },
            /*{
                label: 'Hobby',
                url: hash_slash+'hobby'
            },*/
            /*{
                label: 'Contact',
                url: hash_slash+'contact'
            }*/
        ];

        $scope.closeMenu = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });