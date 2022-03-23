CREATE DATABASE bankingApp
GO

USE bankingApp
GO

CREATE TABLE accountInformation (
	accountNumber int NOT NULL PRIMARY KEY,
	username VARCHAR(255),
	passowrd VARCHAR(255),
	checkingBalance int,
	savingsBalance int
)
GO

INSERT INTO accountInformation VALUES (0, 'test', 'password', 100, 200)