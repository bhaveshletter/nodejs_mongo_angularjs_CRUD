restaurants.controller('RestaurantEditCtrl', ['$scope', '$http', '$routeParams', '$location', 'apiUrl', function(scope, http, routeParams, location, apiUrl){
	var apiUrl = apiUrl.url;

	http.get(apiUrl + routeParams.id).success(function(data){
		scope.name = data.name
	})

	scope.submit = function(){
		if(scope.name){
			http.put(apiUrl + routeParams.id, {name: scope.name}).success(function(updateRestaurant){
				location.path('/restaurants/' + updateRestaurant._id);
			})
		}else{
			scope.errorStatus = true;
		}
	}

}]);