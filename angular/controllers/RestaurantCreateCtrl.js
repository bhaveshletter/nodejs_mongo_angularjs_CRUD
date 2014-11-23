restaurants.controller('RestaurantCreateCtrl', ['$scope', '$http', '$location', function(scope, http, location){

	scope.submit = function(){
		if(scope.name){
			http.post('http://0.0.0.0:3000/restaurants', {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data._id);
			})
		}else{
			scope.errorStatus = true;
		}
	}

}]);