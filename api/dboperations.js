const sql = require('mssql');
const config = require('./config')

async function getAll() {
	let pool;
	try {
		console.log('Connection Opening...');
		pool = await sql.connect(config);

		const result = await pool.request().query('select * from accountInformation');

		console.log(result.recordsets);

		await pool.close();

		console.log('Connection Closed');
		return result.recordsets;

	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getAll : getAll
}