var angular = require('angular');
require('angular-ui-router');

var app = angular.module('angular-starter', [
	'ui.router'
]);

require('./main/main.js');

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "main/main.html",
	      controller: 'MainCtrl'
	    })
});