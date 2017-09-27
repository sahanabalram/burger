USE burgers_db;
SELECT * FROM burgers;

DROP TABLE burgers;

INSERT INTO burgers(burger_name,devoured,date)
VALUES("Cheese Burger",true,'2017-09-25'),("Cheese and Bacon Burger",true,'2017-09-25'),("Fillet Burger",true,'2017-09-25');



INSERT INTO burgers(burger_name,devoured,date) VALUES("Cheese Burger1",true,'2017-09-25');

INSERT INTO burgers (burger_name,devoured,date) VALUES("beet",false,"2017-09-25");

DELETE FROM  burgers WHERE id= 9;

UPDATE burgers SET devoured = true WHERE id=9;