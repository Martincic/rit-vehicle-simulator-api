CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,full_name VARCHAR(60) NOT NULL,email VARCHAR(100) NOT NULL,password VARCHAR(200) NOT NULL,bearer_token VARCHAR(300) DEFAULT NULL);

CREATE TABLE cars(id INT PRIMARY KEY AUTO_INCREMENT,user_id INT NOT NULL,nickname VARCHAR(50) NOT NULL,description VARCHAR(300) NOT NULL,speed INT DEFAULT 0,hvac TINYINT DEFAULT 0,stateOfCharge INT DEFAULT 0, latitude VARCHAR(15) DEFAULT NULL,longitude VARCHAR(15) DEFAULT NULL);

CREATE TABLE sessions(id INT PRIMARY KEY AUTO_INCREMENT, user_id INT NOT NULL, session_id INT NOT NULL, speed INT DEFAULT 0,hvac TINYINT DEFAULT 0,stateOfCharge INT DEFAULT 0, latitude VARCHAR(15) DEFAULT NULL,longitude VARCHAR(15) DEFAULT NULL, created_at datetime default CURRENT_TIMESTAMP);

 -- These passwords are: test123
INSERT INTO users(id, full_name, email, password) VALUES(1, "John Doe", "john@doe.com", "$argon2id$v=19$m=65536,t=3,p=4$SORpKUUPF5YZ5IJm1kmSiA$+4K3L1+1UAD9Cqc9f5M6g7iYBPPOE+1LwavP/XK4HCA");
INSERT INTO users(id, full_name, email, password) VALUES(2, "Ash Ketchup", "ash@mail.com", "$argon2id$v=19$m=65536,t=3,p=4$SORpKUUPF5YZ5IJm1kmSiA$+4K3L1+1UAD9Cqc9f5M6g7iYBPPOE+1LwavP/XK4HCA");

INSERT INTO cars(id, user_id, nickname, description) VALUES(1, 1, "Nevera #1", "My trusty old Nevera");
INSERT INTO cars(id, user_id, nickname, description) VALUES(2, 1, "Traktor", "My trusty old Traktor");
INSERT INTO cars(id, user_id, nickname, description) VALUES(3, 1, "Tomos APN", "My trusty old Tomos");

INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 0, 0, 100, 45.000, 14.000, '2023-03-15 12:11:00');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 5,  0, 99, 45.012, 14.012, '2023-03-15 12:11:05');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 10, 0, 99, 45.035, 14.035, '2023-03-15 12:11:15');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 13, 0, 98, 45.042, 14.042, '2023-03-15 12:11:20');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 30, 0, 98, 45.057, 14.057, '2023-03-15 12:11:25');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 45, 0, 98, 45.066, 14.066, '2023-03-15 12:11:30');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 55, 0, 98, 45.079, 14.079, '2023-03-15 12:11:35');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 75, 1, 98, 45.091, 14.091, '2023-03-15 12:11:40');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 90, 1, 97, 45.100, 14.100, '2023-03-15 12:11:45');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 91, 1, 97, 45.110, 14.110, '2023-03-15 12:11:50');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 93, 1, 97, 45.112, 14.112, '2023-03-15 12:11:55');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 92, 1, 97, 45.126, 14.126, '2023-03-15 12:12:00');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 95, 1, 97, 45.137, 14.137, '2023-03-15 12:12:05');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 93, 1, 96, 45.148, 14.148, '2023-03-15 12:12:15');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 90, 1, 96, 45.159, 14.159, '2023-03-15 12:12:20');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 87, 1, 96, 45.169, 14.169, '2023-03-15 12:12:25');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 95, 1, 95, 45.182, 14.182, '2023-03-15 12:12:30');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 64, 1, 95, 45.196, 14.196, '2023-03-15 12:12:35');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 35, 0, 94, 45.202, 14.202, '2023-03-15 12:12:40');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 30, 0, 94, 45.209, 14.209, '2023-03-15 12:12:45');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 15, 0, 94, 45.256, 14.256, '2023-03-15 12:12:50');
INSERT INTO sessions(user_id, session_id, speed, hvac, stateOfCharge, latitude, longitude, created_at) VALUES(1, 1, 0,  0, 93, 45.289, 14.289, '2023-03-15 12:12:55');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;