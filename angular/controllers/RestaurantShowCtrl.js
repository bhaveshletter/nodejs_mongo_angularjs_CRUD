restaurants.controller('RestaurantShowCtrl', ['$scope', '$routeParams', 'restaurantFactory', function(scope, routeParams, restaurantFactory){

	scope.restaurant = []
	restaurantFactory.getRestaurant(routeParams.id).then(function(restaurant){
		scope.restaurant = restaurant
	})

}]);