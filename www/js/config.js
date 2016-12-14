/**
 * Created by Galust on 12/13/2016.
 */
shantApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html'
    })

  $urlRouterProvider.otherwise('/main');
});
