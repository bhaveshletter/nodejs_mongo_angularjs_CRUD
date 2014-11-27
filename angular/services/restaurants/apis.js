restaurants.factory('restaurantFactory',['$http', '$q', 'apiUrl', function (http, q, apiUrl) {
	var factoryObj = {},
	apiUrl = apiUrl.url;

	factoryObj.getRestaurant = function(id){
		var dfd = q.defer()

		http.get(apiUrl + id)
		.success(function (result) {
			dfd.resolve(result)
		})
		.error(function (data, status, headers, config) {
			dfd.resolve(data)
		})

		return dfd.promise
	};

	return factoryObj;

}])