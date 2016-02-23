app.directive('entry', function() {
	return {
		restrict: 'E',
		scope: {
			data:'='
		},
		templateUrl: 'templates/ArticleInfo.html',
	};
});