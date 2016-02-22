app.factory('articleService', ['$http', function($http){
	return $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fab404982b3b43017c79d543caef8aca:19:74490677')
			.success(function(articleData) {
				return articleData;
			})
		.error(function(err) {});
}])