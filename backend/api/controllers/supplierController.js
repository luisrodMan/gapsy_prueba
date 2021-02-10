'use strict';

const fs = require('fs');

var rawdata = fs.readFileSync('bd.json');
var suppliers = JSON.parse(rawdata);
console.log(suppliers);

exports.getWelcomeText = function(req, res) {
    res.json({text: "Bienvenido Candidato 02"});
};
exports.getAppVersion = function(req, res) {
    res.json({text: "versión 0.0.2"});
};
exports.listAll = function(req, res) {
	var page = req.query.page;
	const count = 3;
	var i = (page - 1) * count;
	var result = []
	for (; i < suppliers.length && result.length < count; i++) {
		result.push(suppliers[i]);
	}
    res.json(result);
};
exports.create = function(req, res) {


	
    res.json("hola mundo xd4sss");
};
exports.delete = function(req, res) {
	const toDelete = req.params.name;
	var i = 0;
	var toDeleteIndex = - 1;
	console.log("todelete: " + toDelete + "]")
	for (; i < suppliers.length; i++) {
		if (suppliers[i].nombre === toDelete) {
			toDeleteIndex = i;
			break;
		}
	}
	if (toDeleteIndex != -1) {
		suppliers.splice(toDeleteIndex, 1);
	}
	res.json({text: "OK"});

	// update file
	let data = JSON.stringify(suppliers);
	fs.writeFileSync('bd.json', data);
};
