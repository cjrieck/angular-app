app.controller('HomeController', ['$scope', 'articleService', '$location', function($scope, articleService, $location){
	articleService.success(function(data){
		$scope.articles = data.response.docs;
	});
}])