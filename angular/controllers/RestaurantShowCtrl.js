restaurants.controller('RestaurantShowCtrl', ['$scope', '$http', '$routeParams', 'apiUrl', function(scope, http, routeParams, apiUrl){
	var apiUrl = apiUrl.url

	scope.restaurant = []
	http.get(apiUrl + routeParams.id).success(function(data){
		scope.restaurant = data
	})

}]);