/**
 * ClasesController
 *
 * @description :: Server-side logic for managing clases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		Clases.find().exec( function(err, clases) {
			res.view({
				clases: clases
			});
		});
	},

	show: function(req, res) {
		Clases.findOne(req.param('id'), function foundClases(err, clases) {
			res.view({
				clases: clases
			});
		});
	},
};

