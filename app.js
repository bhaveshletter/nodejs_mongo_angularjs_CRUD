var express = require( 'express' ),
http = require( 'http' ),
path = require( 'path' ),
mongoose = require('mongoose'),
url = require('url'),
request = require('request'),
bodyParser = require('body-parser'),
multer = require('multer');

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

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/*app.use(multer); // for parsing multipart/form-data*/

// END

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.get('/', function (req, res, next) {
	res.send({status: 'APIs is up!'});
});

app.get('/restaurants', function (req, res, next) {

	Restaurant.find(function (err, restaurants) {
		if (err) return handleError(err);
		res.send(restaurants);
	})

});

app.get('/restaurants/:id', function (req, res, next) {
	var id = req.params.id;

	Restaurant.findById(id, function (err, restaurant) {
		if (err) return handleError(err);
		res.send(restaurant)
	})

});

app.post('/restaurants', function (req, res, next) {
	var name = req.body.name;

	Restaurant.create({ name: name }, function (err, restaurant) {
		if (err) return handleError(err);
		res.send(restaurant);
	})

});

app.put('/restaurants/:id', function (req, res, next) {
	var id = req.params.id,
		name = req.body.name;
	
	Restaurant.findByIdAndUpdate(id, {name: name}, function(err, restaurant){
		if (err) return handleError(err);
		res.send(restaurant);
	})
});

app.delete('/restaurants/:id', function (req, res, next) {
	var id = req.params.id;

	Restaurant.findByIdAndRemove(id, function (err, status) {		
		if (err) return handleError(err);
		res.send(200)
	})
});

/* Server configuration */
var server = app.listen(port, function () {
	var host = server.address().address,
	port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});