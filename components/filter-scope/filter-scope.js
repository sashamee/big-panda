(function () {

    "use strict";

    angular.module('bigPandaApp')
        .directive('filterScope', ['usersManagerFactory', filterScope]);

    function filterScope() {

        return {
            restrict: 'E',
            templateUrl: 'components/filter-scope/filter-scope.html',
            scope: {
                commentToShow: '='
            },
            controller: ['$scope', 'usersManagerFactory', Controller]
        };

        function Controller($scope, usersManagerFactory) {

            var filterTextInLowerCase,
                filterMatch;

            $scope.filterTbx = '';
            $scope.commentToShow = usersManagerFactory.usersData;


            $scope.showFiltered = function () {

                filterTextInLowerCase = $scope.filterTbx.toLowerCase();

                filterMatch = usersManagerFactory.usersData.filter(function (user) {

                    return (user.email.toLowerCase()).includes(filterTextInLowerCase) ||
                        (user.text.toLowerCase()).includes(filterTextInLowerCase)
                });

                $scope.commentToShow = filterMatch || usersManagerFactory.usersData;
            };

        }

    }

})();