restaurants.controller('RestaurantIndexCtrl', ['$scope', '$http', '$location', 'apiUrl', function(scope, http, location, apiUrl){
	var apiUrl = apiUrl.url

	scope.restaurants = []

	scope.delete_record = function(id){
		http.delete(apiUrl + id).success(function(){
			getAll()
		})
	}

	var getAll = function(){
		http.get(apiUrl).success(function(data){
			scope.restaurants = data
		})
	}

	getAll()

}]);