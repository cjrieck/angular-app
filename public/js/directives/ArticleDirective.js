app.directive('entry', function() {
	return {
		restrict: 'E',
		scope: {
			data:'='
		},
		templateUrl: 'templates/articleInfo.html',
	};
});