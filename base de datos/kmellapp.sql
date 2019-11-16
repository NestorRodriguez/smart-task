CREATE DATABASE KmellApp;

use `KmellApp` ;
 
-- -----------------------------------------------------
-- Table `KmellApp`.`calificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`calificacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion_calificacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `KmellApp`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`rol` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idRol_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `KmellApp`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`servicios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion_servicio` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `KmellApp`.`estado_solicitud`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`estado_solicitud` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `detalle_estado` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `KmellApp`.`profesion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`profesion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion_ocupacion` VARCHAR(200) NOT NULL,
  `titulo_academico` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `KmellApp`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `documento` INT(20) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `rol_id` INT(11) NOT NULL,
  `profesion_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `rol_id`, `profesion_id`),
  INDEX `fk_usuarios_rol1_idx` (`rol_id` ASC),
  INDEX `fk_usuarios_profesion1_idx` (`profesion_id` ASC),
  CONSTRAINT `fk_usuarios_rol1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `KmellApp`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_profesion1`
    FOREIGN KEY (`profesion_id`)
    REFERENCES `KmellApp`.`profesion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `KmellApp`.`solicitud_servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`solicitud_servicio` (
  `id` INT(11) NOT NULL,
  `descripcion_solicitud_servicio` VARCHAR(200) NOT NULL,
  `fecha_solicitud` DATE NOT NULL,
  `lugar_solicitud` VARCHAR(45) NULL,
  `telefono` BIGINT NOT NULL,
  `calificacion_id` INT(11) NOT NULL,
  `estado_solicitud_id` INT(11) NOT NULL,
  `usuarios_id` INT(11) NOT NULL,
  `usuario_solicita_servicio` INT NULL,
  `servicios_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_solicitud_servicio_calificacion1_idx` (`calificacion_id` ASC),
  INDEX `fk_solicitud_servicio_estado_solicitud1_idx` (`estado_solicitud_id` ASC),
  INDEX `fk_solicitud_servicio_usuarios1_idx` (`usuarios_id` ASC),
  INDEX `fk_solicitud_servicio_servicios1_idx` (`servicios_id` ASC),
  CONSTRAINT `fk_solicitud_servicio_calificacion1`
    FOREIGN KEY (`calificacion_id`)
    REFERENCES `KmellApp`.`calificacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitud_servicio_estado_solicitud1`
    FOREIGN KEY (`estado_solicitud_id`)
    REFERENCES `KmellApp`.`estado_solicitud` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitud_servicio_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `KmellApp`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitud_servicio_servicios1`
    FOREIGN KEY (`servicios_id`)
    REFERENCES `KmellApp`.`servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `KmellApp`.`usuarios_has_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KmellApp`.`usuarios_has_servicios` (
  `usuarios_id` INT(11) NOT NULL,
  `usuarios_rol_id` INT(11) NOT NULL,
  `servicios_id` INT(11) NOT NULL,
  `imagen_servicio` LONGTEXT NULL
);



INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (1, 'Administrador');
INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (2, 'Usuario');
INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (3, 'Trabajador');


INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (1, 'Sistemas', 'Ingeniero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (2, 'Ebanisteria', 'Carpintero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (3, 'Podador', 'Jardinero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (4, 'Diseño', 'Arquitecto');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (5, 'Electricista', 'Ingeniero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (6, 'Electronico', 'Ingeniero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (7, 'Auxiliar', 'Contador');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (8, 'Administrativa', 'Ingeniera');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (9, 'Mecanico', 'Ingeniero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`, `titulo_academico`) VALUES (10, 'Telecomunicaciones', 'Ingeniera');


INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (1, 'David', 'Reyes', 'setecsa307@gmail.com', 51663717, '12345', 2, 6);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (2, 'Juan', 'Herrera', 'juan.herrera@hotmail.com', 1916040458, '1234', 1, 3);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (3, 'Camilo', 'Ardila', 'camilo.ardila@gmail.com', 1916040458, '2341', 2, 10);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (4, 'Gonzalo', 'Torres', 'gonzalo.torres@hotmail.com', 1916040458, '5367', 3, 9);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (5, 'Mercedes', 'Martinez', 'mercedes.martinez@gmail.com', 1012435678, '6531', 2, 1);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (6, 'Carolina', 'Fajardo', 'carolina.fajardo@hotmail.com', 41342788, '9786', 3, 5);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (7, 'Aura', 'Vargas', 'aura.vargas@gmail.com', 78543976, '3657', 2, 2);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (8, 'Mauricio', 'Baron', 'mauricio.baron@hotmail.com', 10123654, '8766', 2, 7);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (9, 'Barbara', 'Santos', 'barbara.santos@gmail.com', 1011234654, '34564', 3, 4);
INSERT INTO `kmellapp`.`usuarios` (`id`, `nombres`, `apellidos`, `email`, `documento`, `contraseña`, `rol_id`, `profesion_id`) 
VALUES (10, 'Alexandra', 'Montero', 'alexandra.montero@hotmail.com', 1102354765, '25367', 3, 8);


INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (1, 'Arreglar Computador');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (2, 'Arreglar Puerta');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (3, 'Arreglar Jardin');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (4, 'Remodelacion Casa');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (5, 'Arreglar Aire Acondicionado');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (6, 'Arreglar Sistema Electrico');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (7, 'Manejo de Cartera');	
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (8, 'Manejo y Soluciones Integrales');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (9, 'Mantenimiento Carro');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (10, 'Soluciones Redes');


INSERT INTO `kmellapp`.`estado_solicitud` (`id`, `detalle_estado`) VALUES (1, 'En proceso');
INSERT INTO `kmellapp`.`estado_solicitud` (`id`, `detalle_estado`) VALUES (2, 'En espera');
INSERT INTO `kmellapp`.`estado_solicitud` (`id`, `detalle_estado`) VALUES (3, 'Terminado');


INSERT INTO `kmellapp`.`calificacion` (`id`, `descripcion_calificacion`) VALUES (1, 'Ninguna');
INSERT INTO `kmellapp`.`calificacion` (`id`, `descripcion_calificacion`) VALUES (2, 'Malo');
INSERT INTO `kmellapp`.`calificacion` (`id`, `descripcion_calificacion`) VALUES (3, 'Regular');
INSERT INTO `kmellapp`.`calificacion` (`id`, `descripcion_calificacion`) VALUES (4, 'Bueno');
INSERT INTO `kmellapp`.`calificacion` (`id`, `descripcion_calificacion`) VALUES (5, 'Excelente');


INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (1, 'El Computador no Prende', '2019-11-10', 'Calle 23', 3264756, 1, 1, 5, 3, 10);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (2, 'Solicito Podar el Jardin', '2019-12-01', 'Calle 14', 3264756, 4, 3, 2, 2, 3);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (3, 'Cambiar el Piso de Madera de dos cuartos', '2019-12-18', 'Calle 61', 3264756, 5, 3, 9, 1, 1);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (4, 'Se necesita arreglar el  Sistema Electrico del garaje', '2019-11-13', 'Calle 170', 302345867, 1, 2, 1, 4, 6);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (5, 'El Aire Acondicionado no Sirve', '2019-11-22', 'Calle 163', 3264756, 1, 1, 6, 5, 4);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (6, 'Se necesita adelantar  Cartera de Tesoreria', '2019-12-07', 'Calle 54', 3084658798, 5, 3, 8, 6, 2);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (7, 'Ingeniero que diseñe, e Implemente  posibles Soluciones ', '2019-12-15', 'Calle 78', 3102433387, 5, 3, 10, 10, 5);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (8, 'El vehiculo no prende', '2019-12-17', 'Calle 67', 4635345, 3, 2, 4, 9, 8);
INSERT INTO `kmellapp`.`solicitud_servicio` (`id`, `descripcion_solicitud_servicio`, `fecha_solicitud`, `lugar_solicitud`, `telefono`, `calificacion_id`, `estado_solicitud_id`, `usuarios_id`, `usuario_solicita_servicio`, `servicios_id`) 
VALUES (9, 'La Antena de Señal Telefonica no Sirve', '2019-11-28', 'Calle 34', 3224658799, 4, 3, 3, 8, 7);


INSERT INTO `kmellapp`.`usuarios_has_servicios` (`usuarios_id`, `usuarios_rol_id`, `servicios_id`, `imagen_servicio`)
 VALUES (4, 3, 9, '/imagen');
INSERT INTO `kmellapp`.`usuarios_has_servicios` (`usuarios_id`, `usuarios_rol_id`, `servicios_id`, `imagen_servicio`)
 VALUES (6, 3, 5, '/imagen');
INSERT INTO `kmellapp`.`usuarios_has_servicios` (`usuarios_id`, `usuarios_rol_id`, `servicios_id`, `imagen_servicio`)
 VALUES (8, 3, 7, '/imagen');
INSERT INTO `kmellapp`.`usuarios_has_servicios` (`usuarios_id`, `usuarios_rol_id`, `servicios_id`, `imagen_servicio`)
 VALUES (1, 3, 6, '/imagen');
INSERT INTO `kmellapp`.`usuarios_has_servicios` (`usuarios_id`, `usuarios_rol_id`, `servicios_id`, `imagen_servicio`)
 VALUES (3, 3, 10, '/imagen');












