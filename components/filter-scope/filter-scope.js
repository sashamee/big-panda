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

            var minTextLengthToFilter = 1,
                filterMatch;

            $scope.filterTbx = '';
            $scope.commentToShow = usersManagerFactory.usersData;


            $scope.showFiltered = function () {

                filterMatch = usersManagerFactory.usersData.filter(function (user) {

                    return (user.email.toLowerCase()).includes($scope.filterTbx.toLowerCase()) ||
                        (user.text.toLowerCase()).includes($scope.filterTbx.toLowerCase())
                });

                $scope.commentToShow = filterMatch || usersManagerFactory.usersData;
            };

        }

    }

})();