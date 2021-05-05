const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authUser = (req, res) => {
	try {
		const token = req.headers.authrization ? req.headers.authrization.split('')[1] : '';
		if (token) {
			const error = new error('access denied');
			return next(error);
		}
		const data = jwt.verify(token.process.env.PRIVATE_KEY);
		req.data = data;
		next();
	} catch (error) {
		next(error);
	}
};
