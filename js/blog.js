(function () {
    var app = angular.module("blogApp", []);

    // BLOG POST CONTROLLER
    app.controller("BlogController", function ($scope, $http) {
        $scope.date = Date.now();
        $scope.post = {};
        $http.get("https://jsonstorage.net/api/items/cdca6e82-db3d-4eb4-8cb2-94139d32a884").then(function (response) {
            $scope.post = response.data[0];
            console.log("Blog post loaded");
        });
    });

    // COMMENT CONTROLLER
    app.controller("CommentController", function ($scope) {
        $scope.comment = {}; // Empty object to store current comment
        $scope.comments = []; // Empty array to hold comments
        $scope.addComment = function () { // Function to add comment
            $scope.comment.date = Date.now(); // Sets current date
            $scope.comments.push($scope.comment);
            $scope.comment = {};
            console.log("Comment posted");
        }
    });

    // FOOTER CONTROLLER
    app.controller("FooterController", function ($scope) {
        $scope.date = Date.now();
    });
})();