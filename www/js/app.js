// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var shantApp = angular.module('starter', ['ionic']);
shantApp.controller('shantCtrl', ['$scope', '$ionicSideMenuDelegate', '$stateParams', '$http', function ($scope, $ionicSideMenuDelegate, $stateParams, $http) {
  $scope.expandedCategories = [];
  $scope.toggleMenu = function (id) {
    if($scope.expandedCategories[id]){
      $scope.expandedCategories[id] = !$scope.expandedCategories[id];
    }else{
      $scope.expandedCategories[id] = true;
    }
    console.log($scope.expandedCategories);
  };
  $http.get("js/package.json")
    .then(function (response) {
      $scope.footerMenus = response.data.footer;
      console.log($scope.footerMenus);
      $scope.user = response.data.User;
      $scope.categories = response.data.Categories;
    });

  $scope.footerMenus = [
    {
      'title': 'Help'
    },
    {
      'title': 'Terms & Conditions'
    },
    {
      'title': 'About Shant'
    }
  ];

}]);

shantApp.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
