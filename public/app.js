
var app = angular.module('angular-starter', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "main/main.html",
	      controller: 'MainCtrl'
	    })
});