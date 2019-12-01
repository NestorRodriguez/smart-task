create database kmellapp;

use kmellapp;

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









