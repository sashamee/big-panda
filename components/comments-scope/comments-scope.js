(function () {

    "use strict";

    angular.module('bigPandaApp')
        .directive('commentsScope', ['usersManagerFactory', commentsScope]);

    function commentsScope() {

        return {
            restrict: 'E',
            templateUrl: 'components/comments-scope/comments-scope.html',
            scope: {
                commentToShow: '='
            },
            controller: ['$scope', 'usersManagerFactory', Controller]
        };

        function Controller($scope, usersManagerFactory) {

            $scope.commentToShow = [];

            $scope.commentToShow = usersManagerFactory.usersData;
        }

    }

})();