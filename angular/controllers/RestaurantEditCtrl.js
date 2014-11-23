restaurants.controller('RestaurantEditCtrl', ['$scope', '$http', '$routeParams', '$location', function(scope, http, routeParams, location){
	http.get('http://0.0.0.0:3000/restaurants/' + routeParams.id).success(function(data){
		scope.name = data.name
	})

	scope.submit = function(){
		if(scope.name){
			http.put('http://0.0.0.0:3000/restaurants/' + routeParams.id, {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data.id);
			})
		}else{
			scope.errorStatus = true;
		}
	}

}]);