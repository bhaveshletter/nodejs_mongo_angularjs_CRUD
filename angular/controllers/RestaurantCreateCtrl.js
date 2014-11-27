restaurants.controller('RestaurantCreateCtrl', ['$scope', '$http', '$location', 'apiUrl', function(scope, http, location, apiUrl){
	var apiUrl = apiUrl.url

	scope.submit = function(){
		if(scope.name){
			http.post(apiUrl, {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data._id)
			})
		}else{
			scope.errorStatus = true
		}
	}

}]);