-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: gamerhouse
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Juego PS5'),(2,'Juego PS4'),(3,'Juego Switch'),(4,'Juego XBOX');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `console` varchar(255) NOT NULL,
  `id_category` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_d8f32315-ef91-4670-95eb-5409d08a67c4` (`id_category`),
  CONSTRAINT `FK_d8f32315-ef91-4670-95eb-5409d08a67c4` FOREIGN KEY (`id_category`) REFERENCES `categories` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Gran Turismo',14900,'El nuevo juego de la mítica saga de conducción de Sony está de vuelta!','Deportes',2,'granturismo.jpeg'),(2,'Gran Turismo',14900,'El nuevo juego de la mítica saga de conducción de Sony está de vuelta!','Deportes',1,'granturismo.jpeg'),(3,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',1,'re8.jpeg'),(4,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',2,'re8.jpeg'),(5,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',4,'re8.jpeg'),(6,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',1,'bfps4.jpeg'),(7,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',2,'bfps4.jpeg'),(8,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',4,'bfps4.jpeg'),(9,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',1,'farcry6.jpeg'),(10,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',2,'farcry6.jpeg'),(11,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',4,'farcry6.jpeg'),(12,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',1,'fifa22.jpeg'),(13,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',2,'fifa22.jpeg'),(14,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',4,'fifa22.jpeg'),(15,'Halo Infinite',9700,'Master Chief está de vuelta!','Shooter',4,'halo.jpeg'),(16,'Ratchet y Clank: Rift Apart',9000,'Sigue a Ratchet y Clank en esta nueva aventura de plataformas y accion!','Plataformas',1,'ratchet.jpeg'),(17,'Ratchet y Clank: Rift Apart',9000,'Sigue a Ratchet y Clank en esta nueva aventura de plataformas y accion!','Plataformas',2,'ratchet.jpeg'),(18,'Pokémon Snap',9500,'Fotografia a tus pokemon favoritos!','Infantiles',3,'pokesnap.jpeg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_role` int DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_509cc666-f834-4aca-a5ba-639fc46b6d81` (`id_role`),
  CONSTRAINT `FK_509cc666-f834-4aca-a5ba-639fc46b6d81` FOREIGN KEY (`id_role`) REFERENCES `roles` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gamerhouse'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-21 18:16:58
