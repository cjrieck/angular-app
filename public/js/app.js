var app = angular.module('AngularApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		title: 'Articles',
		controller: 'HomeController',
		templateUrl: 'views/articleListView.html'
	})
	.when('/article/:index', {
		controller: 'ArticleController',
		templateUrl: 'views/articleView.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});