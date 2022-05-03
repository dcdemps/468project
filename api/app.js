const db = require('./dboperations');

const express = require('express');
const cors = require('cors');
const app = express();


// Need to use when using json
app.use(express.json());
app.use(cors());


app.get('/', function(request, response) {
	db.getAll().then(result => {
		response.json(result)
	});
})

app.use('/login', (request, response) => {
	const token = {
		token: 'test123'
	}
	console.log('login token sent: ', token)
	response.send(token);
});

// routes to the other js files
// to get to these routes when making a request would be for 
// ex. localhost:3000/user/(whatever path you create in users.js)
const usersRoute = require('./routes/users');

app.use('/users', usersRoute);


 


const PORT = 3001

app.listen( PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	}
);