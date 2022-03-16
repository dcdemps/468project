const { Router } = require('express');
const db = require('../database');

const router = Router();

router.use((request, response, next) => {
	console.log('Request made to /USERS ROUTE')
	next();
});

router.post('/create', (request, response) => {
	console.log('User created: ',request.body);
	const { username, password } = request.body;
	if (username && password) {
		try {
			db.promise().query(`INSERT INTO banking_app.users VALUES('${username}', '${password}')`);
			response.status(201).send({ msg: 'Created User' });
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log('Request does not have a username and password. No new user created');
	}
});


module.exports = router;