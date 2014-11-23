var restaurants = angular.module('nodeAngular', ['ngRoute'])
restaurants.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/restaurants', {
		templateUrl: '/assets/angular/views/restaurants/index.html',
		controller: 'RestaurantIndexCtrl'
	}).
	when('/restaurants/new', {
		templateUrl: '/assets/angular/views/restaurants/form.html',
		controller: 'RestaurantCreateCtrl'
	}).
	when('/restaurants/:id', {
		templateUrl: '/assets/angular/views/restaurants/show.html',
		controller: 'RestaurantShowCtrl'
	}).
	when('/restaurants/:id/edit', {
		templateUrl: '/assets/angular/views/restaurants/form.html',
		controller: 'RestaurantEditCtrl'
	}).
	when('/restaurants/:id/delete', {
		templateUrl: '/assets/angular/views/restaurants/form.html',
		controller: 'RestaurantEditCtrl'
	}).	
	otherwise({
		templateUrl: '/angular/views/home.html',
		controller: 'HomeCtrl'
	})
}
])