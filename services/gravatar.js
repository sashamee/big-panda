(function () {

    "use strict";

    angular.module('bigPandaApp')
        .factory('gravatarFactory', ['md5', gravatarFactory]);


    function gravatarFactory(md5) {

        var imageSize = 50,
            gravatarApiUrl = 'https://www.gravatar.com/avatar/',
            imageUrl;

        var getGravatarUrl = function (emailAddress) {

            imageUrl = gravatarApiUrl +
                                md5.createHash(emailAddress.toLowerCase() || '') +
                                '?s=' +
                                imageSize;

            return imageUrl;
        };


        // public func
        return {
            getGravatarUrl: getGravatarUrl
        }

    };

})();