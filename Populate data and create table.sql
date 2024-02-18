INSERT INTO `category` (`id`, `name`) VALUES (1, 'TABLET');
INSERT INTO `category` (`id`, `name`) VALUES (2, 'SMARTPHONE');
INSERT INTO `brand` (`id`, `name`) VALUES (1, 'SAMSUNG');
INSERT INTO `brand` (`id`, `name`) VALUES (2, 'APPLE');
INSERT INTO `brand` (`id`, `name`) VALUES (3, 'HUAWEI');
INSERT INTO `brand` (`id`, `name`) VALUES (4, 'SONY');
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (11, 'Samsung Galaxy S22', 'BLUE', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (12, 'Samsung Galaxy Note 23', 'RED', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (13, 'Samsung Galaxy A33', 'GREEN', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (14, 'Samsung Galaxy Z Flip 4', 'WHITE', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (15, 'Samsung Galaxy S22 Ultra', 'PURPLE', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (31, 'Samsung Galaxy Tab S8', 'BLUE', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (32, 'Samsung Galaxy Tab A8', 'RED', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (33, 'Samsung Galaxy Tab Active 3', 'GREEN', 1, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (6, 'iPhone 13 Pro', 'BLUE', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (7, 'iPhone 13', 'RED', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (8, 'iPhone SE (2nd gen)', 'GREEN', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (9, 'iPhone 13 Mini', 'WHITE', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (10, 'iPhone 13 Pro Max', 'PURPLE', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (29, 'iPad Pro 2023', 'WHITE', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (30, 'iPad Air 2023', 'SILVER', 2, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (16, 'Huawei P50 Pro', 'BLUE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (17, 'Huawei Mate 50', 'RED', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (18, 'Huawei Nova 8', 'GREEN', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (19, 'Huawei P50', 'WHITE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (20, 'Huawei Nova 8 Pro', 'PURPLE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (21, 'Huawei MatePad Pro 2023', 'BLUE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (22, 'Huawei MediaPad M7', 'RED', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (23, 'Huawei MatePad T10s', 'GREEN', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (24, 'Huawei MatePad 11', 'WHITE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (25, 'Huawei MatePad M6', 'PURPLE', 3, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (1, 'Sony Xperia 1 II', 'BLUE', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (2, 'Sony Xperia 5 II', 'RED', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (3, 'Sony Xperia 10 III', 'GREEN', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (4, 'Sony Xperia 1 III', 'WHITE', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (5, 'Sony Xperia Pro', 'PURPLE', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (26, 'Sony Xperia Tablet S3', 'BLUE', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (27, 'Sony Xperia Z4 Tablet', 'RED', 4, 2);
INSERT INTO `product` (`id`, `name`, `product_color`, `brandId`, `categoryId`) VALUES (28, 'Sony Xperia Tablet Z', 'GREEN', 4, 2);
INSERT INTO `user` (`id`, `email`, `password`) VALUES (1, 'a', 'a');

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.2.0 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table test.brand
CREATE TABLE IF NOT EXISTS `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table test.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table test.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_88991860e839c6153a7ec878d39` (`productId`),
  KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  CONSTRAINT `FK_88991860e839c6153a7ec878d39` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table test.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `product_color` enum('BLUE','RED','GREEN','WHITE','PURPLE','SILVER') COLLATE utf8mb4_general_ci NOT NULL,
  `brandId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bb7d3d9dc1fae40293795ae39d6` (`brandId`),
  KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`),
  CONSTRAINT `FK_bb7d3d9dc1fae40293795ae39d6` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table test.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;


