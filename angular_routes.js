var restaurants = angular.module('nodeAngular', ['ngRoute'])
restaurants.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/restaurants', {
		templateUrl: '/angular/views/restaurants/index.html',
		controller: 'RestaurantIndexCtrl'
	}).
	when('/restaurants/new', {
		templateUrl: '/angular/views/restaurants/form.html',
		controller: 'RestaurantCreateCtrl'
	}).
	when('/restaurants/:id', {
		templateUrl: '/angular/views/restaurants/show.html',
		controller: 'RestaurantShowCtrl'
	}).
	when('/restaurants/:id/edit', {
		templateUrl: '/angular/views/restaurants/form.html',
		controller: 'RestaurantEditCtrl'
	}).
	when('/restaurants/:id/delete', {
		templateUrl: '/angular/views/restaurants/form.html',
		controller: 'RestaurantEditCtrl'
	}).	
	otherwise({
		templateUrl: '/angular/views/restaurants/home.html',
		controller: 'HomeCtrl'
	})
}
])