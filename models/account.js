var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	name : String,
	gender : String,
	age : Number
});

module.exports = mongoose.model('Account',AccountSchema)