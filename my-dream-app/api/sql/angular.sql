-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 18, 2020 at 01:40 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE `family` (
  `family_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `member_name` varchar(256) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `family`
--

INSERT INTO `family` (`family_id`, `user_id`, `member_name`, `age`) VALUES
(15, 7, 'King', 1),
(16, 7, 'Queen', 2),
(17, 7, 'Ace', 3),
(18, 6, 'Spandhana', 2),
(20, 5, 'Ball', 2),
(21, 3, 'Ahmeen', 15),
(22, 4, 'Vasanth', 23),
(23, 2, 'Dhuruv', 20),
(24, 1, 'Andal', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `age` int(11) NOT NULL,
  `street` varchar(256) NOT NULL,
  `city` varchar(256) NOT NULL,
  `pincode` int(11) NOT NULL,
  `hobbies` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `fname`, `lname`, `age`, `street`, `city`, `pincode`, `hobbies`) VALUES
(1, 'Asin', 'R', 35, 'Tambaram', 'Chennai', 600059, 'Singing'),
(2, 'Vikram', 'M', 55, 'Kodambakkam', 'Chennai', 600012, 'Acting'),
(3, 'Rahman', 'A.R', 50, 'Kodambakkam', 'Chennai', 600012, 'Composing Music'),
(4, 'Rajan', 'R', 25, 'Anna nagar', 'Dharmapuri', 600023, 'Using mobile,Designing'),
(5, 'John', 'M', 29, 'Kodambakkam ', 'Chennai', 600024, 'Reading,Writing'),
(6, 'Nagarajan', 'Nagarajan', 29, 'Kodambakkam ', 'Chennai', 600024, 'Reading,Coding'),
(7, 'Divya', 'Divya', 24, 'Anna nagar', 'Dharmapuri', 600024, 'Eating,Cooking,Watching TV');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`family_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `family`
--
ALTER TABLE `family`
  MODIFY `family_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
