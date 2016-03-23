/**
* Maestro.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	nombre: {
  		type: 'string',
  		required: true
  	},

  	apellidos: {
  		type: 'string',
  		required: true
  	},

  	edad: {
  		type: 'int',
  		required: true,
  	},

  	matricula: {
  		type: 'string',
  		required: true
  	},

  	clases: {
  		collection: 'clases',
  		via: 'teacher'
  	}
  }
};

