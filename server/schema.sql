CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username varchar(50),
  message varchar(50)
);

CREATE TABLE users (
  username varchar(50),
  roomname varchar(50),
  message varchar(140)
);

CREATE TABLE rooms (
  username varchar(50),
  roomname varchar(50),
  message varchar(140)
);

/* Create other tables and define schemas for them here! */
/*
1) Users
    - username
    - roomname
    -message
2) Messages
    - username
    - message
3) Rooms
    - username
    - roomname
    - message
*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

