restaurants.controller('RestaurantShowCtrl', ['$scope', '$http', '$routeParams', function(scope, http, routeParams){
	
	scope.restaurant = []
	http.get('http://0.0.0.0:3000/restaurants/' + routeParams.id).success(function(data){
		scope.restaurant = data
	})

}]);