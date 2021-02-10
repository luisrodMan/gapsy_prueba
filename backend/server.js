	var express = require('express');
  app = express()
  app.use(function(req, res, next) {
	
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

	next();
  });

  port = process.env.PORT || 3001,
  Supplier = require("./api/models/supplierModel")
  bodyParser = require("body-parser")

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())
  
  

  var routes = require('./api/routes/supplierRoutes');
routes(app);

app.listen(port);

console.log('Suppliers RESTful API server started on: ' + port);