<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## How to

- Database server configuration can be updated/viewed at 'src\app\app.module.ts'
- This app is configured using Swagger.io api documentation, which will give UI for all the created API
- After starting the service please go to this URL http://localhost:3044/doc/api/
  a. POST /reservation/create
  b. PUT /reservation/cancel
  c. GET /reservation/checkParkingSpot
  d. GET /reservation/list

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Populate data in heidiSQL

-- Host: 127.0.0.1
-- Server version: 8.2.0 - MySQL Community Server - GPL
-- Server OS: Win64
-- HeidiSQL Version: 12.6.0.6765

---

/_!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT _/;
/_!40101 SET NAMES utf8 _/;
/_!50503 SET NAMES utf8mb4 _/;
/_!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE _/;
/_!40103 SET TIME_ZONE='+00:00' _/;
/_!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 _/;
/_!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' _/;
/_!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 _/;

-- Dumping structure for table test.areas
CREATE TABLE IF NOT EXISTS `areas` (
`id` int NOT NULL AUTO_INCREMENT,
`area_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
`parking_quantity` int NOT NULL,
`created_at` datetime NOT NULL,
`updated_at` datetime NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table test.areas: ~3 rows (approximately)
INSERT INTO `areas` (`id`, `area_name`, `parking_quantity`, `created_at`, `updated_at`) VALUES
(1, 'SMALL', 2, '2024-02-16 22:37:22', '2024-02-17 16:18:03'),
(2, 'MEDIUM', 3, '2024-02-16 22:37:22', '2024-02-16 22:37:23'),
(3, 'LARGE', 6, '2024-02-18 20:02:26', '2024-02-18 20:02:27');

-- Dumping structure for table test.reservations
CREATE TABLE IF NOT EXISTS `reservations` (
`id` int NOT NULL AUTO_INCREMENT,
`vehicle_id` int NOT NULL,
`area_id` int NOT NULL,
`start_time` datetime NOT NULL,
`exit_time` datetime NOT NULL,
`created_at` datetime NOT NULL,
`updated_at` datetime NOT NULL,
`status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'CREATED',
PRIMARY KEY (`id`),
KEY `vehicle_id` (`vehicle_id`),
KEY `area_id` (`area_id`),
CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table test.reservations: ~2 rows (approximately)
INSERT INTO `reservations` (`id`, `vehicle_id`, `area_id`, `start_time`, `exit_time`, `created_at`, `updated_at`, `status`) VALUES
(25, 2, 1, '2024-02-18 12:00:00', '2024-02-18 13:00:00', '2024-02-18 12:09:45', '2024-02-18 13:46:58', 'CANCELLED'),
(26, 1, 2, '2024-02-18 12:00:00', '2024-02-18 13:00:00', '2024-02-18 12:30:46', '2024-02-18 14:10:00', 'CANCELLED'),
(27, 3, 2, '2024-02-18 12:00:00', '2024-02-18 13:00:00', '2024-02-18 12:30:51', '2024-02-18 12:30:51', 'CREATED'),
(30, 4, 2, '2024-02-18 12:00:00', '2024-02-18 14:00:00', '2024-02-18 13:41:37', '2024-02-18 13:41:37', 'CREATED');

-- Dumping structure for table test.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
`id` int NOT NULL AUTO_INCREMENT,
`owner_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
`registration_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
`created_at` datetime NOT NULL,
`updated_at` datetime NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `plate_number` (`registration_number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table test.vehicles: ~3 rows (approximately)
INSERT INTO `vehicles` (`id`, `owner_name`, `registration_number`, `created_at`, `updated_at`) VALUES
(1, 'JOHN', '123', '2024-02-16 22:37:56', '2024-02-16 22:37:56'),
(2, 'SAM', '1234', '2024-02-16 22:37:56', '2024-02-16 22:37:56'),
(3, 'BETA', '12345', '2024-02-16 22:37:56', '2024-02-16 22:37:56'),
(4, 'Karr Owener', 'ABC123', '2024-02-17 15:14:17', '2024-02-17 15:14:17');

/_!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') _/;
/_!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') _/;
/_!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) _/;
/_!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT _/;
/_!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) _/;

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
