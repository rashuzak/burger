
### Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheeseburger', false);

INSERT INTO burgers (burger_name) VALUES ('Double Cheeseburger');

INSERT INTO burgers (burger_name) VALUES ('Hamburger');

INSERT INTO burgers (burger_name) VALUES ('Double Cheeseburger');