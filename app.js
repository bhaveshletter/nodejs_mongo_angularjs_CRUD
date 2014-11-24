var express = require( 'express' ),
http = require( 'http' ),
path = require( 'path' ),
mongoose = require('mongoose'),
url = require('url'),
request = require('request'),
bodyParser = require('body-parser'),
multer = require('multer'),
cors = require('cors');

var app = express(),
port = 3000;

// START Connect & Config mongodb
var Schema = mongoose.Schema,
restaurantSchema = new Schema({
	name : String
});

var connect = function () {
	var options = { server: { socketOptions: { keepAlive: 1 } } };
	mongoose.connect('mongodb://127.0.0.1:27017/myCrud', options);
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

mongoose.model('Restaurant', restaurantSchema);
var Restaurant = mongoose.model('Restaurant');

// END Connect & Config mongodb

// START Configuration

/*app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded*/
/*app.use(multer); // for parsing multipart/form-data*/

// END

app.use(cors())
.use(bodyParser.json())
.use(function(req, res, next) {
	bodyParser.urlencoded({ extended: true }); // for parsing application/x-www-form-urlencoded
	/*multer; // for parsing multipart/form-data*/
	next();
})

.get('/', function (req, res, next) {
	res.send({status: 'APIs is up!'});
})

.get('/restaurants', function (req, res, next) {

	Restaurant.find(function (err, restaurantsList) {
		if (err) return handleError(err);
		res.send(restaurantsList);
	})

})

.get('/restaurants/:id', function (req, res, next) {
	var id = req.params.id;

	Restaurant.findById(id, function (err, restaurant) {
		if (err) return handleError(err);
		res.send(restaurant)
	})

})

.post('/restaurants', function (req, res, next) {
	var name = req.body.name;

	Restaurant.create({ name: name }, function (err, createdRestaurant) {
		if (err) return handleError(err);
		res.send(createdRestaurant);
	})

})

.put('/restaurants/:id', function (req, res, next) {
	var id = req.params.id,
		toBeUpdatedName = req.body.name;

	Restaurant.findByIdAndUpdate(id, {$set: {name: toBeUpdatedName}}, function(err, updatedRestaurant){
		if (err) return handleError(err);
		res.send(updatedRestaurant);
	});

})

.delete('/restaurants/:id', function (req, res, next) {
	var id = req.params.id;

	Restaurant.findByIdAndRemove(id, function (err, deletedRestaurant) {
		if (err) return handleError(err);
		res.sendStatus(200);
	})
});

/* Custome fucntion */
var handleError = function(err){
	console.log('------------- ERROR ---------------');
	console.log(err);
}

/* Server configuration */
var server = app.listen(port, function () {
	var host = server.address().address,
	port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});