-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-08-2022 a las 04:53:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sweet_bakery`
--
CREATE DATABASE IF NOT EXISTS `sweet_bakery` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sweet_bakery`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delivery`
--

CREATE TABLE `delivery` (
  `id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `adress` text NOT NULL,
  `location` text NOT NULL,
  `comments` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delivery_type`
--

CREATE TABLE `delivery_type` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `delivery_type`
--

INSERT INTO `delivery_type` (`id`, `type`) VALUES
(1, 'Retiro por sucursal'),
(2, 'Envío a domicilio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(35, 'cheescake.jpg', 1),
(36, 'tiramisu.jpg', 2),
(37, 'lemon-pie.jpg', 3),
(38, 'tarta-frutillas.jpg', 4),
(39, 'brownie.jpg', 5),
(40, 'tarta-frutos-rojos.jpg', 6),
(41, 'crumble-manzana.jpg', 7),
(42, 'rogel.jpg', 8),
(43, 'carrot-cake.jpg', 9),
(44, 'black-coffee.jpg', 10),
(45, 'tarta-ricota.jpg', 11),
(46, 'pasta-frola.jpg', 12),
(47, 'mini-cheescake.jpg', 13),
(48, 'mini-tiramisu.jpg', 14),
(49, 'mini-lemon-pie.jpg', 15),
(50, 'mini-tarta-frutillas.jpg', 16),
(51, 'mini-brownie.jpg', 17),
(52, 'mini-frutos-del-bosque.jpg', 18),
(53, 'mini-crumble.jpg', 19),
(54, 'mini-chocotorta.jpg', 20),
(55, 'mini-oreo.jpg', 21),
(56, 'mini-coco.jpg', 22),
(57, 'mini-franuisima.jpg', 23),
(58, 'anios-locos.jpg', 24),
(59, 'marquise-chocolate.jpg', 25),
(60, 'limon-glaseado.jpg', 26),
(61, 'limon-amapola.jpg', 27),
(62, 'nuez-ddl.jpg', 28),
(63, 'marmolado.jpg', 29),
(64, 'frutos-rojos.jpg', 30),
(65, 'chocolate-oreos.jpg', 31),
(66, 'manzana.jpg', 32),
(67, 'alfajor-nuez.jpg', 33),
(68, 'alfajor-coco.jpg', 34),
(69, 'alfajor-chocolate-negro.jpg', 35),
(70, 'alfajor-maicena.jpg', 36),
(71, 'alfajores-xl.jpg', 37),
(72, 'cookies-avena.jpg', 38),
(73, 'cookies-nutella.jpg', 39),
(74, 'cookies-chocolate.jpg', 40),
(75, 'cookies-vainilla.jpg', 41),
(76, 'cookies-surtidas.jpg', 42),
(77, 'pain-choco-frambuesa.jpg', 43),
(78, 'croissants.jpg', 44),
(79, 'medialunas.jpg', 45),
(80, 'macarons4.jpg', 46),
(81, 'scones.jpg', 47),
(82, 'marineras.jpg', 48),
(83, 'bizcochitos-de-grasa.jpg', 49),
(84, 'cuadraditos.jpg', 50),
(85, 'criollitos.jpg', 51),
(86, 'copitos.jpg', 52),
(87, 'pepas.jpg', 53),
(88, 'masas-hungaras.jpg', 54),
(89, 'cantucci-con-almendras.jpg', 55),
(90, 'box-degustacion1.jpg', 56),
(91, 'desayuno-2-personas.jpg', 57),
(92, 'desayuno-4-personas.jpg', 58),
(94, 'imgProduct-1661129589891-798372620.png', 59),
(95, 'imgProduct-1661129623732-958010465.png', 60),
(96, 'imgProduct-1661129658740-949977492.png', 61),
(97, 'imgProduct-1661129690056-399395272.png', 62),
(98, 'imgProduct-1661129858058-172544685.png', 63);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `state_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `delivery_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_state`
--

CREATE TABLE `order_state` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `order_state`
--

INSERT INTO `order_state` (`id`, `type`) VALUES
(1, 'Pendiente de cobro'),
(2, 'Pagado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `payments`
--

INSERT INTO `payments` (`id`, `type`) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta de crédito'),
(3, 'Tarjeta de débito'),
(4, 'Transferencia bancaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` float(11,0) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Cheescake', 991, 'Cremoso y compacto, su base es de cookies y su cobertura de confitura de frutos rojos. 20cm: rinde 10/12 porciones.', 9, NULL, NULL, NULL),
(2, 'Tiramisú', 991, 'Interior de bizcocho soletilla, humedecido con almibar y licor de café, mousse de queso mascarpone. Cubierta con cacao y pedacitos de bizcocho. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(3, 'Lemon Pie', 991, 'Masa sable breton rellena con nuestra untuosa crema de limón y terminado con el clásico merengue italiano. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(4, 'Tarta de frutillas', 991, 'Base de masa sable breton rellena con crema pastelera y frutillas frescas. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(5, 'Brownie', 991, 'Base de brownie húmedo con chocolate al 70% de cacao, nueces, dulce de leche repostero y el clásico merengue Italiano.18 cm: rinde 10/12 porciones.', 9, NULL, NULL, NULL),
(6, 'Tarta de frutos del bosque', 991, 'Masa sable breton de chocolate rellena con crema pastelera y frutos del bosque. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(7, 'Crumble de manzana', 991, 'Base de tarta dulce con relleno esponjoso de pure de manzana, con miel, un toque de canela y cubierta con un crocante stroisel. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(8, 'Rogel', 991, 'Finos discos de masa crocante rogel, dulce de leche y el clásico merengue Italiano. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(9, 'Carrot cake', 991, 'Torta de zanahoria, especiada con nueces y un suave frosting. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(10, 'Black coffee', 991, 'Bizcochuelo de chocolate y café con dos cortes: uno con una suave mouse de café y chocolate, y el otro corte con dulce de frambuesa. Humedecida con almibar de café. Cubierta con suave mouse de café y chocolate. 18 cm: rinde 10/12 porciones.', 9, NULL, NULL, NULL),
(11, 'Tarta de ricota', 1251, 'Nuestra clásica masa con húmedo relleno de ricota y una pizca de ralladura de limón. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(12, 'Frola membrillo o batata', 1251, 'Nuestra clásica masa de frola con el mejor dulce de batata o membrillo. 20cm: rinde 8/10 porciones.', 9, NULL, NULL, NULL),
(13, 'Mini Cheesecake con frutos rojos', 1251, 'Base de galletitas dulces y crocantes mousse de creme cheese con mermelada de frutos rojos.', 6, NULL, NULL, NULL),
(14, 'Mini tiramisú', 1251, 'Interior de bizcocho soletilla, humedecido con almibar y licor de café, mousse de queso mascarpone. Cubierta con cacao y pedacitos de bizcocho.', 6, NULL, NULL, NULL),
(15, 'Mini Lemon Pie', 1251, 'Masa sable breton rellena con nuestra untuosa crema de limón y terminado con el clásico merengue Italiano.', 6, NULL, NULL, NULL),
(16, 'Mini Tarta de Frutillas', 1251, 'Base de masa sable breton rellena con crema pastelera y frutillas frescas.', 6, NULL, NULL, NULL),
(17, 'Mini Brownie', 1251, 'Base de brownie húmedo con chocolate al 70% de cacao, nueces, dulce de leche repostero y el clásico merengue Italiano.', 6, NULL, NULL, NULL),
(18, 'Mini Tarta de frutos del bosque', 1251, 'Masa sable breton de chocolate rellena con crema pastelera y frutos del bosque.', 6, NULL, NULL, NULL),
(19, 'Mini Crumble de manzana', 1251, 'Base de tarta dulce con relleno esponjoso de pure de manzana, con miel, un toque de canela y cubierta con un crocante stroisel.', 6, NULL, NULL, NULL),
(20, 'Chocotorta', 1251, 'Galletitas chocolinas, crema de queso y dulce de leche.', 6, NULL, NULL, NULL),
(21, 'Bombita Oreo', 1456, 'Base de brownie, con dulce de leche repostero con galletas oreo y mousse de chocolate.', 6, NULL, NULL, NULL),
(22, 'Mini coco', 1456, 'Base de masa dulce mucho dulce de leche y cruble de coco.', 6, NULL, NULL, NULL),
(23, 'Franuisima', 1456, 'Base de marquise, crema de dulce de leche, relleno de galletitas oreo y cobertura de frambuesas FraNui.', 6, NULL, NULL, NULL),
(24, 'Mini años locos', 1456, 'Crema de chocolate con picos de merengue base con café.', 6, NULL, NULL, NULL),
(25, 'Mini marquise de chocolate', 1456, 'Base humeda de chocolate, dulce de leche, crema y merengue.', 6, NULL, NULL, NULL),
(26, 'Limón', 1456, 'Budín sabor limón recubierto con glaseado -tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(27, 'Limón y amapola', 1456, 'Budín sabor limón con amapolas -Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(28, 'Nuez y dulce de leche', 1456, 'Budín sabor vainilla con nueces y corazón de dulce de leche - Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(29, 'Marmolado', 1456, 'Budín sabor marmolado de chocolate y vainilla -Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(30, 'Frutos rojos', 1456, 'Budín sabor frutos rojos- Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(31, 'Chocolate y oreos', 2371, 'Budín sabor chocolate y oreos - Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(32, 'Manzana', 2371, 'Budín sabor manzana con crumble - Tamaño 650 grs. y 1200 grs.', 2, NULL, NULL, NULL),
(33, 'Alfajor de nuez', 2371, 'Masa crocante de nuez y mucho dulce de leche.', 1, NULL, NULL, NULL),
(34, 'Alfajor de coco', 2371, 'Tapa de coco y mucho dulce de leche.', 1, NULL, NULL, NULL),
(35, 'Alfajor de chocolate', 2371, 'Bañado en chocolate blanco o negro y relleno de dulce de leche.', 1, NULL, NULL, NULL),
(36, 'Alfajor de maicena', 2371, 'Clásico de maicena con dulce de leche.', 1, NULL, NULL, NULL),
(37, 'Alfajor XXL', 2371, 'Chocolate blanco o negro relleno con dulce de leche. Relleno con pasta de avellana. Relleno con pasta de nougat. Maicena con dulce de leche. Chocolate con relleno de frambuesa.', 1, NULL, NULL, NULL),
(38, 'Cookies de avena', 2371, 'Cookies de avena por 1/4.', 3, NULL, NULL, NULL),
(39, 'Cookie rellena de Nutella', 2371, 'Cookie rellena de Nutella.', 3, NULL, NULL, NULL),
(40, 'Cookie vainilla y dulce de leche', 2371, 'Cookie de vainilla y dulce de leche con chips de chocolate', 3, NULL, NULL, NULL),
(41, 'Cookies surtidas', 1101, 'Cookies surtidas por 1/4.', 3, NULL, NULL, NULL),
(42, 'Pain de Chocolate', 1101, 'Masa crocante de nuez y mucho dulce de leche.', 4, NULL, NULL, NULL),
(43, 'Croissant', 1101, 'Ideal para el desayuno y la merienda - Elaborado con manteca de primera calidad.', 4, NULL, NULL, NULL),
(44, 'Medialunas', 1101, 'Las mejores medialunas de grasa y manteca, recién horneadas.', 4, NULL, NULL, NULL),
(45, 'Macarons', 1101, 'Macarons surtidos por 12, 18 o 24 unidades.', 7, NULL, NULL, NULL),
(46, 'Scons', 1101, 'Con nueces, chips de chocolate o ralladura de limón.', 8, NULL, NULL, NULL),
(47, 'Marineras por 1/4', 1101, 'Con y sin semillas: livianas, crocantes y sabrosas.', 8, NULL, NULL, NULL),
(48, 'Bizcochitos de grasa por 1/4', 1101, 'Probá nuestros irresistibles bizcochitos de grasa.', 8, NULL, NULL, NULL),
(49, 'Cuadraditos por 1/4', 1101, 'Elegí el que más te guste: ricota, coco con dulce de leche, brownie con nueces, frola de membrillo o batata, limón y manzana.', 8, NULL, NULL, NULL),
(50, 'Criollos por 1/4', 1101, 'Crocantes, livianos, suaves y con aroma a manteca.', 8, NULL, NULL, NULL),
(51, 'Copitos', 871, 'Deliciosos copitos de dulce de leche bañados con chocolate.', 8, NULL, NULL, NULL),
(52, 'Pepas por 1/4', 871, 'Clásicas pepas de vainilla y membrillo', 8, NULL, NULL, NULL),
(53, 'Masitas húngaras por 1/4', 871, 'Masitas con cubierta crocante de chocolate con almendras y rellenas con dulce de frambuesas.', 8, NULL, NULL, NULL),
(54, 'Cantucci con almendras por 1/4', 871, 'También llamados biscottis, son una masita típica italiana aquí reversionada por nuestro maestro pastelero.', 8, NULL, NULL, NULL),
(55, 'Degustación de mini tortas', 871, 'Elegí la variedad que prefieras: Cheesecake, Brownie, Lemon Pie, Crumble de manzana, Chocotorta, Tarta de Frutos del Bosque, Años locos, Franuisima, Tarta de frutillas, Tiramisú, Bombita oreo, Tarta de ricota, Mini coco, Marquise de chocolate. Tamaños: x4/x6/x9.', 5, NULL, NULL, NULL),
(56, 'Desayuno para 2 personas', 871, 'Incluye: tarjeta alusiva, Scones con chips de chocolate 1/4, Macarons x 1 unidad, Cantuccis con almendras 1/4, Húngaras por 9 unidades, Alfajor XL de avellana o nougat por 1 unidad, medialunas x 2 unidades, Rodajas de pan de campo por 4 unidades, Criollitos x 4 unidades, Copito de dulce de leche x 1 unidad, Figazzitas o similar rellenos con jamón y queso x 2 unidades, Espiral vienes x 1 unidad (relleno con pasta de almendras, chocolate, almendras y cerezas) o similar, Manteca por 3 unidades, Dulce de leche x 2 unidades, Infusiones varisa, taza.', 5, NULL, NULL, NULL),
(57, 'Desayuno para 4 personas', 871, 'Incluye: tarjeta alusiva, Scones con chips de chocolate 1/4, Macarons x 2 unidad, Cantuccis con almendras 1/4, Húngaras por 9 unidades, Alfajor XL de avellana o nougat por 1 unidad, medialunas x 4 unidades, Rodajas de pan de campo por 6 unidades, Criollitos x 8 unidades, Copito de dulce de leche x 2 unidad, Figazzitas o similar rellenos con jamón y queso x 2 unidades, Espiral vienes x 1 unidad (relleno con pasta de almendras, chocolate, almendras y cerezas) o similar, Manteca por 4 unidades, Dulce de leche x 2 unidades, Infusiones varias, taza.', 5, NULL, NULL, NULL),
(58, 'Box dulce', 871, 'Incluye: 2 Mini postres a elección, 2 Macarons surtidos, 1 Cuadrado de coco y dulce de leche, 1 Cuadrado de ricota, 1 Alfajor XL nougat, 1/4 Kg. Bizcochitos de grasa, 1/4 Kg. Pepas de membrillo, 1/4 kg. Scones, 1/4 Kg. marineras semilladas, 1/4 Kg. Alfajores de maicena, 2 Copitos de dulce de leche bañados en chocolate, 1 Pan de campo chico.', 5, NULL, NULL, NULL),
(59, 'Alfajor de mousse de chocolate', 871, 'Relleno de mousse y muy rico.', 1, '2022-08-15 00:23:51', '2022-08-22 00:53:09', NULL),
(60, 'Alfajor de mousse de limon', 871, 'Relleno de mousse de limon y muy rico.', 1, '2022-08-15 00:26:09', '2022-08-22 00:53:43', NULL),
(61, 'Alfajor de mousse de naranja', 346, 'Relleno de mousse de naranja y muy rico.', 1, '2022-08-15 00:26:44', '2022-08-22 00:54:18', NULL),
(62, 'Alfajor de mousse de manzana', 346, 'Relleno de mousse de manzana y muy rico.', 1, '2022-08-15 00:28:12', '2022-08-22 00:54:50', NULL),
(63, 'Chocolate 3 vasito', 346, 'Super rico y delicioso', 6, '2022-08-15 00:30:32', '2022-08-22 00:57:38', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_categories`
--

CREATE TABLE `products_categories` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products_categories`
--

INSERT INTO `products_categories` (`id`, `type`) VALUES
(1, 'Alfajores'),
(2, 'Budines'),
(3, 'Cookies'),
(4, 'Croissant'),
(5, 'Desayunos y boxes'),
(6, 'Mini postres'),
(7, 'Macarons'),
(8, 'Productos secos'),
(9, 'Postres');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` text NOT NULL,
  `re_password` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `avatar` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `password`, `re_password`, `category_id`, `avatar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Madeleine', 'correo@gmail.com', 77777, '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', 1, 'avatar1.jpg', NULL, '2022-08-22 01:53:02', NULL),
(2, 'pepito', 'pepito@gmail.com', 0, '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', 2, 'avatar1.jpg', NULL, NULL, NULL),
(3, 'gomez', 'gomez@gmail.com', 0, '$2a$10$CfdVjabjfxGgzsPTOovQnuaimaUZOyOOl.HNVtCCi0F3iC46xf/Ma', '$2a$10$qvthglmNHlUks7RZYJC6juHj.6WPQr.dCuSdARVD2o6MNVHLCvhgm', 2, '', NULL, NULL, NULL),
(4, 'admin', 'admin@gmail.com', 77777, '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', '$2a$10$6e9kJiBzj.Tee9ikKxTxW.OTCMdVS.YGAQddyoNsDY6mH/3s8GknO', 1, 'avatar1.jpg', '2022-08-22 01:53:02', '2022-08-22 01:53:02', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_categories`
--

INSERT INTO `users_categories` (`id`, `type`) VALUES
(1, 'Admin'),
(2, 'User');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indices de la tabla `delivery_type`
--
ALTER TABLE `delivery_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_id` (`payment_id`,`delivery_id`),
  ADD KEY `state_id` (`state_id`,`payment_id`,`user_id`,`delivery_id`),
  ADD KEY `delivery_id` (`delivery_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`,`order_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `order_state`
--
ALTER TABLE `order_state`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `delivery_type`
--
ALTER TABLE `delivery_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_state`
--
ALTER TABLE `order_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `delivery_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `order_state` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `products_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `users_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
