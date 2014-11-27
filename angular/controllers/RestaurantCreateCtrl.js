restaurants.controller('RestaurantCreateCtrl', ['$scope', '$location', 'restaurantFactory', function(scope, location, restaurantFactory){

	scope.submit = function(){
		if(scope.name){
			restaurantFactory.create({name: scope.name}).then(function(data){
				location.path('/restaurants/' + data._id)
			})
		}else{
			scope.errorStatus = true
		}
	}

}]);