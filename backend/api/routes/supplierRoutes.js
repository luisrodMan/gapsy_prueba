'use strict';
module.exports = function(app) {
  var supplierList = require('../controllers/supplierController');

	app.route('/suppliers/welcome_text')
	.get(supplierList.getWelcomeText);
	app.route('/suppliers/app_version')
	.get(supplierList.getAppVersion);

	// app.route('/suppliers/:page') // param value
	app.route('/suppliers')
	.get(supplierList.listAll)
	.post(supplierList.create);

	app.route('/suppliers/:name')
	.delete(supplierList.delete);

};