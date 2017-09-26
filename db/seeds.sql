USE burgers_db;
SELECT * FROM burgers;

DROP TABLE burgers;
INSERT INTO burgers(burger_name,devoured,date)
VALUES("Cheese Burger",true,'2017-09-25'),("Cheese and Bacon Burger",true,'2017-09-25'),("Fillet Burger",true,'2017-09-25');

SELECT * FROM burgers;