(function () {

    "use strict";

    //users-manager
    angular.module('bigPandaApp', ['angular-md5'])
        .factory('usersManagerFactory', ['gravatarFactory', usersManagerFactory]);


    function usersManagerFactory(gravatarFactory) {

        var User = function (_email, _date, _text) {

            this.date = _date;
            this.email = _email;
            this.gravatar = gravatarFactory.getGravatarUrl(_email);
            this.text = _text;
        };

        // users json
        User.prototype.users = [];


        var setUsersData = function (email, date, text) {

            User.prototype.users.unshift(new User(email, date, text));
        };


        // public func
        return {
            usersData: User.prototype.users
            ,setUsersData: setUsersData

        }

    };

})();