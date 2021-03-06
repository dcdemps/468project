const { Router } = require('express');

const db = require('../dboperations');
const cors = require('cors');
const router = Router();

router.use((request, response, next) => {
	console.log('Request made to /users ROUTE')
	next();
});


// TODO: this needs to be rewritten using mssql
router.post('/create', cors(), (request, response) => {

	console.log('Request made to /users/create');

	let credentials = {...request.body}

	db.createUser(credentials).then(result => {
		response.status(201).json(result);
	})




	// console.log('User created: ',request.body);
	// const { username, password } = request.body;
	// if (username && password) {
	// 	try {
	// 		db.promise().query(`INSERT INTO banking_app.users VALUES('${username}', '${password}')`);
	// 		response.status(201).send({ msg: 'Created User' });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// } else {
	// 	console.log('Request does not have a username and password. No new user created');
	// }
});
router.post('/account', (request, response) => {
	console.log('Request made to /users/account');

	let accountName = {...request.body}

	db.getAccountSummary(accountName).then(result => {
		response.status(201).json(result);
	})
});

module.exports = router;