CREATE DATABASE bankingApp
GO


USE bankingApp
GO


CREATE TABLE accountInformation (
	accountNumber int NOT NULL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR(255),
	checkingBalance int,
	savingsBalance int
)
GO


INSERT INTO accountInformation VALUES (0, 'test', 'password', 100, 200)
GO


CREATE PROCEDURE CreateUser
	(
		@accountNumber int,
		@username VARCHAR(255),
		@password VARCHAR(255),
		@checkingBalance int,
		@savingsBalance int
	)
AS
BEGIN
	INSERT INTO accountInformation
	VALUES(
				@accountNumber,
				@username,
				@password,
				@checkingBalance,
				@savingsBalance
			)
END
GO