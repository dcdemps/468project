const express = require('express');

const usersRoute = require('./routes/users');
const cors = require('cors');

const app = express();

app.use(cors());


// Need to use when using json
app.use(express.json());

// routes to the other js files
// to get to these routes when making a request would be for 
// ex. localhost:3000/user/(whatever path you create in users.js)
app.use('/users', usersRoute);

const PORT = 3001

app.listen(
	PORT,
	() => {
		console.log(`Server is running on http://localhost:${PORT}`);
	}
);