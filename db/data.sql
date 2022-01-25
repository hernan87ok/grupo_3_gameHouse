
--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Juego PS5'),(2,'Juego PS4'),(3,'Juego Switch'),(4,'Juego XBOX');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Gran Turismo',14900,'El nuevo juego de la mítica saga de conducción de Sony está de vuelta!','Deportes',2,'granturismo.jpeg'),(2,'Gran Turismo',14900,'El nuevo juego de la mítica saga de conducción de Sony está de vuelta!','Deportes',1,'granturismo.jpeg'),(3,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',1,'re8.jpeg'),(4,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',2,'re8.jpeg'),(5,'Resident Evil Village',9200,'Sigue a Ethan Winters en esta nueva aventura de terror!','Terror',4,'re8.jpeg'),(6,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',1,'bfps4.jpeg'),(7,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',2,'bfps4.jpeg'),(8,'Battlefield 2042',10500,'Battlefield esta de vuelta, esta vez con una nueva entrega de guerra futurista!','Shooter',4,'bfps4.jpeg'),(9,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',1,'farcry6.jpeg'),(10,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',2,'farcry6.jpeg'),(11,'FarCry 6',9900,'Bienvenido a Yara. ¿Es el Fracaso de la Rebelión Inevitable? Únete a la Lucha. ¡Por la Victoría! ¡Por la Libertad!','Shooter',4,'farcry6.jpeg'),(12,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',1,'fifa22.jpeg'),(13,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',2,'fifa22.jpeg'),(14,'FIFA 22',11800,'El juego de simulacion de futbol número 1 esta de vuelta!','Deportes',4,'fifa22.jpeg'),(15,'Halo Infinite',9700,'Master Chief está de vuelta!','Shooter',4,'halo.jpeg'),(16,'Ratchet y Clank: Rift Apart',9000,'Sigue a Ratchet y Clank en esta nueva aventura de plataformas y accion!','Plataformas',1,'ratchet.jpeg'),(17,'Ratchet y Clank: Rift Apart',9000,'Sigue a Ratchet y Clank en esta nueva aventura de plataformas y accion!','Plataformas',2,'ratchet.jpeg'),(18,'Pokémon Snap',9500,'Fotografia a tus pokemon favoritos!','Infantiles',3,'pokesnap.jpeg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Cliente');
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

