app.directive('entry', function() {
	return {
		restrict: 'E',
		scope: {
			data:'='
		},
		templateUrl: 'Templates/ArticleInfo.html',
	};
});