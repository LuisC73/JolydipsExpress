-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2022 a las 03:49:19
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_jolydips`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `document` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `last_name`, `document`, `email`, `address`, `phone`, `createdAt`, `updatedAt`) VALUES
(30, 'Andres', 'castro', '1145556684', 'j@j.com', 'cl Juan de Dios 78-8', '3166499599', '2022-11-14 02:17:19', '2022-11-14 02:17:19'),
(31, 'juan luis', 'Guerra', '1155448899', 'juanGuerra@cesde.edu.co', 'cra 76c 2-99', '3128187898', '2022-11-14 02:46:13', '2022-11-14 02:46:13'),
(32, 'Julian', 'Arce', '1144668879', 'julianarc@hotmail.com', 'cra16 51-65', '3223344255', '2022-11-14 02:46:59', '2022-11-14 02:46:59'),
(33, 'camila', 'arroyave', '1665854969', 'arroyave@gmail.com', 'calle siempre viva 19-88', '3124548855', '2022-11-14 02:47:50', '2022-11-14 02:47:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `reference`, `amount`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Guacamole natural', 1000, 'GN-250', 32, 'muy bueno ', '2022-11-06 21:28:28', '2022-11-06 21:28:28'),
(2, 'guacamole premium', 15000, '1560', 1, ' buenisimo', '2022-11-07 17:16:43', '2022-11-07 17:16:43'),
(4, 'Guacamole Natural 250gr', 15000, 'gn-250', 15, 'Extra fino ', '2022-11-14 02:41:08', '2022-11-14 02:41:08'),
(5, 'guacamole Natural 500gr', 30000, 'gn-500', 60, 'Extra rico ', '2022-11-14 02:41:44', '2022-11-14 02:41:44'),
(6, 'Guacamole Picante 250gr', 15000, 'gp-250', 125, 'Extra fino ', '2022-11-14 02:42:29', '2022-11-14 02:42:29'),
(7, 'Guacamole Picante 500gr', 30000, 'gp-500', 62, 'Extra picante ', '2022-11-14 02:43:20', '2022-11-14 02:43:20'),
(8, 'Hummus 250gr', 15000, 'Hm-250', 96, 'Extra riqui ', '2022-11-14 02:44:02', '2022-11-14 02:44:02'),
(9, 'Hummus 500gr', 30000, 'hm-500', 69, 'Extra humo ', '2022-11-14 02:44:38', '2022-11-14 02:44:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
