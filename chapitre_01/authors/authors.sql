CREATE TABLE authors(
author_id SERIAL PRIMARY KEY,
author_name VARCHAR(255),
nationality VARCHAR(255) ,
books TEXT []
	);
INSERT INTO authors(author_name, nationality, books)VALUES ('Lawrence Nowell', 'UK',ARRAY ['Beowulf'] );	
INSERT INTO authors(author_name, nationality, books)VALUES ('William Shakespeare', 'UK', ARRAY ['Hamlet', 'Othello', 'Romeo and Juliet', 'MacBeth']);	
INSERT INTO authors(author_name, nationality, books)VALUES ('Oscar Wilde', 'UK', ARRAY ['The Picture of Dorian Gray', 'The Importance of Being Earnest']);

SELECT * FROM authors;
SELECT books FROM authors WHERE author_id=1;