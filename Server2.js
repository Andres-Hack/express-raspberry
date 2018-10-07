var express = require("express");
var app     = express();
var path    = require("path");
var gpio 	= require("gpio");

var gpio4 = gpio.export(4, {
	direction: gpio.DIRECTION.OUT,
	ready: function() {
	}
 });

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
	  //__dirname : It will resolve to your project folder
});

app.get('/encendido',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
	gpio4.set();
	console.log("led encendido");
});

app.get('/apagado',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
	gpio4.set(0);
	console.log("led apagado");
});

app.listen(80);

console.log("Running at Port 80");
