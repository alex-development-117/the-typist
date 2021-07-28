-- CREATING DATABASE 
CREATE DATABASE the_typist_db;

-- using the database 
USE the_typist_db;

-- CREATING TABLES
CREATE TABLE User(
    id  INT UNSIGNED AUTO_INCREMENT ,
    rol VARCHAR(15),
    name VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Scores(
    id  INT UNSIGNED AUTO_INCREMENT,
    score INT UNSIGNED,
    user_id INT UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES User(id)
);

-- SHOWING TABLES 
SHOW TABLES;