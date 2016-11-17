(function () {

    "use strict";

    angular.module('bigPandaApp')
        .directive('main', ['usersManagerFactory', Main]);

    function Main() {

        return {
            restrict: 'E',
            templateUrl: 'components/main/main.html',
            scope: {},
            controller: ['$scope', 'usersManagerFactory', Controller]
        };

        function Controller($scope, usersManagerFactory) {

            // init data
            usersManagerFactory.setUsersData('noam@bigpanda.io', new Date(), 'Gooodbye :)');

            usersManagerFactory.setUsersData('Shai@bigpanda.io', new Date(), 'Good!!!');

            usersManagerFactory.setUsersData('elik@bigpanda.io', new Date(), 'Hello there. How are you?');
        }

    }

})();