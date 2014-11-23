restaurants.controller('RestaurantIndexCtrl', ['$scope', '$http', '$location', function(scope, http, location){
	
	scope.restaurants = []

	scope.delete_record = function(id){
		http.delete('http://0.0.0.0:3000/restaurants/' + id).success(function(){
			getAll()
		})
	}

	var getAll = function(){
		http.get('http://0.0.0.0:3000/restaurants').success(function(data){
			scope.restaurants = data
		})
	}

	getAll()

}]);