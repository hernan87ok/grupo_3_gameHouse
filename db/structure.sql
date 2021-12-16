CREATE DATABASE IF NOT EXISTS 'structure';
USE 'structure';

CREATE TABLE `users` (
   `ID` INT AUTO_INCREMENT,
   `firstName` VARCHAR(255) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `id_role` INT,
   `avatar` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `roles` (
   `ID` INT NOT NULL AUTO_INCREMENT,
   `role` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `products` (
   `ID` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `console` VARCHAR(255) NOT NULL,
   `id_category` INT,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `categories` (
   `ID` in,
   `category` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`ID`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_509cc666-f834-4aca-a5ba-639fc46b6d81` FOREIGN KEY (`id_role`) REFERENCES `roles`(`ID`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_d8f32315-ef91-4670-95eb-5409d08a67c4` FOREIGN KEY (`id_category`) REFERENCES `categories`(`ID`)  ;
