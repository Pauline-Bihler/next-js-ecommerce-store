// creating a table
CREATE TABLE goodies (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  goody_name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  price decimal (8,2) NOT NULL,
  description varchar(200)
);

// deleting the whole table
DROP TABLE goodies;

// select everything
SELECT * FROM goodies;

INSERT INTO goodies
(goody_name, type, price, description)
VALUES
('Sasaki and Miyano', 'Merch and Manga', 20, 'Acrylic stand, SNS card & mangas included'),
('Therapy Game', 'Merch and Manga', 15, 'Acrylic stand, postcard & mangas included'),
('Given', 'Manga', 10, 'Five volumes included'),
('Yamada Nonono', 'Manga', 4,'This goody has only one volume'),
('Little Mushroom', 'Novel', 10, 'Two volumes included');
