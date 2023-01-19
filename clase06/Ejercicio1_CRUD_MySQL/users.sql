DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO users (firstname, lastname, age) VALUES ("María", "López", 27);
INSERT INTO users (firstname, lastname, age) VALUES ("Rodrigo", "Fernández", 52);
INSERT INTO users (firstname, lastname, age) VALUES ("Ana", "Sánchez", 34);
INSERT INTO users (firstname, lastname, age) VALUES ("Juan", "Fagúndez", 44);
INSERT INTO users (firstname, lastname, age) VALUES ("Pedro", "Rodríguez", 18);
INSERT INTO users (firstname, lastname, age) VALUES ("Sofía", "Jiménez", 31);
INSERT INTO users (firstname, lastname, age) VALUES ("Pablo", "Gutiérrez", 17);
INSERT INTO users (firstname, lastname, age) VALUES ("Victoria", "Gómez", 31);
INSERT INTO users (firstname, lastname, age) VALUES ("José", "Gómez", 20);
INSERT INTO users (firstname, lastname, age) VALUES ("María Laura", "Jiménez", 30);
INSERT INTO users (firstname, lastname, age) VALUES ("Juan Pablo", "Rodríguez", 46);
INSERT INTO users (firstname, lastname, age) VALUES ("Inés", "Vázquez", 29);