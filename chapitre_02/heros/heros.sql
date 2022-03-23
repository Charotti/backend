CREATE TABLE heroes(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
power TEXT [],
color VARCHAR(32),
isAlive BOOLEAN,
age INTEGER,
image VARCHAR(3000)
);
INSERT INTO heroes (name) VALUES ('Iron Man');
INSERT INTO heroes (name) VALUES ('Thor');
INSERT INTO heroes (name) VALUES ('Daredevil');

INSERT INTO heroes(name, power, color, isAlive, age, image) VALUES
('Iron Man', ARRAY ['money'], 'red', true, 46, 'https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart'),
('Thor', ARRAY ['electricity', 'worthy'], 'blue', true, 300, 'https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg'),
('Daredevil', ARRAY ['blind'], 'red', false, 30, 'https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg');

SELECT * FROM heroes;
SELECT name, power FROM heroes;


INSERT INTO heroes(name, power, color, isAlive, age, image) VALUES ('Superman', ARRAY ['spider'], 'red', true, 25,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bebegavroche.com%2Ffigurine-carton-superman-dc-comics.html&psig=AOvVaw3LC3QBJrrka8onygl0GMCq&ust=1648029640343000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCQ2P262fYCFQAAAAAdAAAAABAP');

UPDATE heroes SET power=ARRAY ['love'] WHERE name='Daredevil';
SELECT power FROM heroes WHERE name='Daredevil';
