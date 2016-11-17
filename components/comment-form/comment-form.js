(function () {

    "use strict";

    angular.module('bigPandaApp')
        .directive('commentForm', ['usersManagerFactory', 'gravatarFactory', commentForm]);

    function commentForm() {

        return {
            restrict: 'E',
            templateUrl: 'components/comment-form/comment-form.html',
            scope: {
            },
            controller: ['$scope', 'usersManagerFactory', 'gravatarFactory', Controller]
        };

        function Controller($scope, usersManagerFactory, gravatarFactory) {

            function clearFormFields() {
                $scope.email = '';
                $scope.text = '';
            };

            $scope.addComment = function(){

                if($scope.email.length > 0 && $scope.text.length > 0) {
                    usersManagerFactory.setUsersData($scope.email, new Date(), $scope.text);
                }

                clearFormFields();
            }

            clearFormFields();

        }

    }

})();