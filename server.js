var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

var bearRouter = require('./routes/bears');

var Bear = require('./models/bear');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {title: 'hello world!'})
});

app.get('/about', function(req, res){
	res.render('about', {title: 'Page about bears'})
});

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res){
	res.json({ message: 'Hooray! welcome to our api!' });
});

app.use('/api', bearRouter);

app.listen(port);
console.log('Magic happens on port ' + port);