-- --------------------------------------------------------
-- 호스트:                          localhost
-- 서버 버전:                        5.7.22 - MySQL Community Server (GPL)
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- express_proto 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `express_proto` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `express_proto`;

-- 테이블 express_proto.article 구조 내보내기
CREATE TABLE IF NOT EXISTS `article` (
  `article_no` int(11) NOT NULL AUTO_INCREMENT,
  `article_contents` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '0',
  PRIMARY KEY (`article_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 테이블 데이터 express_proto.article:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

-- 테이블 express_proto.like 구조 내보내기
CREATE TABLE IF NOT EXISTS `like` (
  `article_no` int(11) NOT NULL,
  `like_count` int(11) unsigned NOT NULL DEFAULT '0',
  KEY `f_article_no` (`article_no`),
  CONSTRAINT `f_article_no` FOREIGN KEY (`article_no`) REFERENCES `article` (`article_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 테이블 데이터 express_proto.like:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;

-- 테이블 express_proto.persons 구조 내보내기
CREATE TABLE IF NOT EXISTS `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `age` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 테이블 데이터 express_proto.persons:~8 rows (대략적) 내보내기
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` (`id`, `name`, `age`) VALUES
	(2, 'ar koo', 23),
	(11, 'zzz', 27),
	(46, 'aran test', 17),
	(67, 'aran test1123', 17),
	(70, '아란입미당', 8),
	(75, 'bts jin', 26),
	(78, '아 대박', 7),
	(87, '이야아아앗', 3);
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
