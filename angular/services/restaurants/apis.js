restaurants.factory('restaurantFactory',['$http', '$q', 'apiUrl', function (http, q, apiUrl) {
	var factoryObj = {},
	apiUrl = apiUrl.url;

	factoryObj.show = function(id){
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

	factoryObj.create = function(toBeCreated){
		var dfd = q.defer()

		http({method: 'POST', url: apiUrl, data: toBeCreated})
		.success(function (result) {
			dfd.resolve(result)
		})
		.error(function (data, status, headers, config) {
			dfd.resolve(data)
		})

		return dfd.promise
	};

	factoryObj.update = function(id, toBeUpdated){
		var dfd = q.defer()

		http({method: 'PUT', url: apiUrl + id, data: toBeUpdated})
		.success(function(result){
			dfd.resolve(result)
		})
		.error(function(data, status, headers, config){
			dfd.resolve(result)
		})

		return dfd.promise
	};

	factoryObj.list = function(){
		var dfd = q.defer()

		http.get(apiUrl)
		.success(function (result) {
			dfd.resolve(result)
		})
		.error(function (data, status, headers, config) {
			dfd.resolve(data)
		})

		return dfd.promise	
	};

	factoryObj.delete = function(id){
		var dfd = q.defer()

		http.delete(apiUrl + id)
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