/**
 * MaestroController
 *
 * @description :: Server-side logic for managing maestroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	show: function(req, res) {
		Maestro.findOne(req.param('id'), function foundMaestro(err, maestro) {
			res.view({
				maestro: maestro
			});
		});
	},

	index: function(req, res) {
		Maestro.find().exec( function(err, maestros) {
			res.view({
				maestros: maestros
			});
		});
	}
};

