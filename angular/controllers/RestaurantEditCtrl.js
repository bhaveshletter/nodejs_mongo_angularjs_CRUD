restaurants.controller('RestaurantEditCtrl', ['$scope', '$routeParams', '$location', 'restaurantFactory', function(scope, routeParams, location, restaurantFactory){


	restaurantFactory.show(routeParams.id).then(function(data){
		scope.name = data.name
	})

	scope.submit = function(){
		if(scope.name){
			restaurantFactory.update(routeParams.id, {name: scope.name}).then(function(updatedRestaurant){
				location.path('/restaurants/' + updatedRestaurant._id)
			})
		}else{
			scope.errorStatus = true
		}
	}

}]);