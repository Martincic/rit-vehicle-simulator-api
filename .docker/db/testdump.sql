CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(60) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(200) NOT NULL,
	login_token VARCHAR(300) DEFAULT NULL
);

CREATE TABLE cars(
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT NOT NULL,
	nickname VARCHAR(50) NOT NULL,
	description VARCHAR(300) NOT NULL
);

 -- These passwords are: test123
INSERT INTO users(id, full_name, email, password) VALUES(1, "John Doe", "john@doe.com", "$argon2id$v=19$m=65536,t=3,p=4$SORpKUUPF5YZ5IJm1kmSiA$+4K3L1+1UAD9Cqc9f5M6g7iYBPPOE+1LwavP/XK4HCA");
INSERT INTO users(id, full_name, email, password) VALUES(2, "Ash Ketchup", "ash@mail.com", "$argon2id$v=19$m=65536,t=3,p=4$SORpKUUPF5YZ5IJm1kmSiA$+4K3L1+1UAD9Cqc9f5M6g7iYBPPOE+1LwavP/XK4HCA");

INSERT INTO cars(id, user_id, nickname, description) VALUES(1, 1, "Nevera #1", "My trusty old Nevera");
INSERT INTO cars(id, user_id, nickname, description) VALUES(2, 1, "Traktor", "My trusty old Traktor");
INSERT INTO cars(id, user_id, nickname, description) VALUES(3, 1, "Tomos APN", "My trusty old Tomos");

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;