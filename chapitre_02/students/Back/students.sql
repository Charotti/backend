CREATE TABLE students(
	student_id SERIAL PRIMARY KEY,
	student_name VARCHAR(30),
	age INTEGER,
	gender VARCHAR(1)		
);
INSERT INTO students (student_name, age, gender) VALUES ('Nicolas', 18, 'M');
INSERT INTO students (student_name, age, gender) VALUES ('Anita', 26, 'F');
INSERT INTO students (student_name, age, gender) VALUES ('Andrei', 98, 'A');

SELECT * FROM students;

DROP TABLE students;




