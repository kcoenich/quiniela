'use strict';

angular.module('quinielApp')

        .controller('loginController', ['$scope', function($scope) {
            $scope.signUp = false;

            $scope.loginFtn = function(uname, pwd) {

                if (!$scope.uname || !$scope.pwd)
                  $scope.loginError = true;

                var userObj = {
                  user : $scope.uname,
                  pass : $scope.pwd
                }
                console.log("userObj", userObj);
            };

            $scope.showSignUp = function() {
              $scope.signUp = true;
            }

            $scope.signUpFtn = function() {

              var userObj = {
                userName : $scope.name,
                userLastName : $scope.lastname,
                userNickname : $scope.username,
                pass : $scope.password
              }
              console.log("userObj", userObj);
            }
        }])

        .controller('matchController', ['$scope', function($scope) {

            console.log("datos", $scope.tournament);
            console.log("datos", $scope.date);
        }])

        .controller('DishDetailController', ['$scope', 'orderByFilter', 'menuFactory', function($scope, orderBy, menuFactory) {

            $scope.dish= menuFactory.getDish(3);

            $scope.sortBy = function(order) {
              if (order === 'date')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'date', false);
              else if (order === '-date')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'date', true);
              else if (order === 'rating')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'rating', false);
              else if (order === '-rating')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'rating', true);
              else if (order === 'author')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'author', false);
              else if (order === '-author')
                  $scope.dish.comments = orderBy($scope.dish.comments, 'author', true);
            };

            var ord = '';

        }])


;
