const UniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userShema = new Schema(
	{
		nom: { type: String },
		prenom: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true }
);

userShema.plugin(UniqueValidator);
const user = mongoose.model('User', userShema);
module.exports = user;
