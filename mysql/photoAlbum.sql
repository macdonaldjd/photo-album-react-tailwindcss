-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 21, 2018 at 09:10 PM
-- Server version: 5.6.38
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sean_clientSideSamples`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblComments`
--

CREATE TABLE `tblComments` (
  `id` int(11) NOT NULL,
  `photoId` int(11) NOT NULL,
  `comment` text NOT NULL,
  `author` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblComments`
--

INSERT INTO `tblComments` (`id`, `photoId`, `comment`, `author`) VALUES
(1, 1, 'For testing purposes of course ;)', 'This is a new comment added here!'),
(2, 1, 'And another comment added!', 'James MacDonald'),
(3, 3, 'Some comments added to this picture :P', 'Some Guy'),
(4, 3, 'and another comment here', 'another guy'),
(5, 5, 'Take this picture down now!', 'Annonymous'),
(6, 2, 'Josh was here!', 'Some guy'),
(7, 15, 'first posting!', 'testing dude');

-- --------------------------------------------------------

--
-- Table structure for table `tblPhotos`
--

CREATE TABLE `tblPhotos` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `caption` longtext,
  `source` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblPhotos`
--

INSERT INTO `tblPhotos` (`id`, `title`, `caption`, `source`) VALUES
(1, '1965 Hoonicorn Mustang', 'Tire shredding machine!', '65Hoonicorn.jpg'),
(2, '1967 Chevrolet Camaro SS', 'Better than the modern Camaro in my opinion', '67Camaro.jpg'),
(3, '1969 Dodge Dart', 'Dream of mine to restore one of these some day', '1969DodgeDart.jpg'),
(4, '2011 Ducati 1198 SP', 'The Ferrari of Motorcycles', '2011Ducati1198SPa.jpg'),
(5, '2017 Chevrolet Corvette C7 Z06', 'Best sounding modern V8', 'corvetteC7Z06.jpg'),
(6, '2015 Dodge Challenger Hellcat', 'Nothing puts more power down from factory than a Challenger', 'dodgeChallengerHellcat.jpg'),
(7, '2016 Dodge Viper ACR', 'The Viper will always be my all-time favorite car', 'dodgeViper.jpg'),
(8, '1985 Dodge Ram 2500 Cummins', 'My all-time favorite truck', 'firstGenCummins.jpg'),
(9, '2002 Nissan Skyline GTR', 'Favorite JDM that has to be importd to Canada', 'r34NissanSkylineGTR.jpg'),
(10, '2018 Nissan Skyline GTR', 'The best the Japanese has to offer today', 'r35NissanGTR.jpg'),
(11, '2018 Triumph Bonneville Bobber', 'Have to tip my hat to this beauty from our UK friends', 'triumphBonnevilleBobber.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblPhotosEmpty`
--

CREATE TABLE `tblPhotosEmpty` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `caption` longtext,
  `source` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblComments`
--
ALTER TABLE `tblComments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photoId` (`photoId`);

--
-- Indexes for table `tblPhotos`
--
ALTER TABLE `tblPhotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `tblPhotosEmpty`
--
ALTER TABLE `tblPhotosEmpty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblComments`
--
ALTER TABLE `tblComments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tblPhotos`
--
ALTER TABLE `tblPhotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tblPhotosEmpty`
--
ALTER TABLE `tblPhotosEmpty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblComments`
--
ALTER TABLE `tblComments`
  ADD CONSTRAINT `photo` FOREIGN KEY (`photoId`) REFERENCES `tblPhotos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
