app.controller('ArticleController', ['$scope', 'articleService', '$routeParams', function($scope, articleService, $routeParams){
	articleService.success(function(data) {
		$scope.article = data.response.docs[$routeParams.index];
	});
}]);