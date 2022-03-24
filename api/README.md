# Stuff I use when doing express stuff

https://www.youtube.com/watch?v=T2KjBiwYyBI&list=PL_cUvD4qzbkxZZyyuXa1xkWFhRB_NoQwl&index=1

https://web.postman.co/

https://tediousjs.github.io/node-mssql/
https://youtu.be/Uvy_BlgwfLI

# Things needed to talk to MySQL server / make this file work

npm install express
	installs express

npm install mssql
	this is for taking to the sql server

npm install nodemon
	For local dev only. Created memory leak when used in docker.  
	this if for having the express server restart when you make changes to the files and save

npm install cors
	fixes something I think

# Process of adding to the api

1. Figure out what information you need from the sql server
2. Write a user-defined stored procedure in setup.sql
3. Write a function in dboperations.js that executes the procedure
4. Write a function in the corresponding route in the API that calls the function from dboperations.js
5. Call the API wherever you need it in the webui