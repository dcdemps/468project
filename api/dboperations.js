const sql = require('mssql');
const config = require('./config')

async function getAll() {
	try {
		console.log('Connection Opening...');
		let pool = await sql.connect(config);

		const result = await pool.request().query('select * from accountInformation');

		console.log(result.recordsets);

		await sql.close();

		console.log('Connection Closed');
		return result.recordsets;

	} catch (error) {
		console.log(error);
	}
}

async function createUser(credentials) {

	let { username, password } = {...credentials};

	try {
		console.log('Connection Opening...');
		let pool = await sql.connect(config);
		
		const query = await pool.request()
		.query('select MAX(accountNumber) as max_accountNumber from accountInformation');

		let largestAccountnumber = query.recordset[0]['max_accountNumber']

		let insertUser = await pool.request()
			.input('accountNumber', sql.Int, largestAccountnumber + 1)
			.input('username', sql.NVarChar, username)
			.input('password', sql.NVarChar, password)
			.input('checkingBalance', sql.Int, 0)
			.input('savingsBalance', sql.Int, 0)
			.execute('CreateUser');

		console.log('User Created');

		await sql.close();
			
		console.log('Connection Closed');
		return insertUser.recordsets;
	} catch (error) {
		console.log(error);
	}
}

async function getAccountSummary(accountName) {
	let {accountName} =  {...accountName};
	try {
		console.log('Connection Opening...');

		let pool = await sql.connect(config);
		
		const result = await pool.request()
		.input('accountName',sql.NVarChar, accountName)
		.query('SELECT username, checkingBalance, savingsBalance FROM accountInformation WHERE username = @accountName');

		console.log(result.recordsets);

		await sql.close();

		console.log('Connection Closed');
		return result.recordsets;

	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getAll : getAll,
	createUser : createUser,
	getAccountSummary:getAccountSummary
}