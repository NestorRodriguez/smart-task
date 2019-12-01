INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (1, 'Administrador');
INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (2, 'Usuario');
INSERT INTO `kmellapp`.`rol` (`id`, `descripcion`) VALUES (3, 'Trabajador');


INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (1, 'Sistemas');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (2, 'Carpinteros');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (3, 'Jardineros');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (4, 'Albañiles');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (5, 'Electricista');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (6, 'Electronicos');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (7, 'Plomero');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (8, 'Cerrajeros');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (9, 'Mecanicos');
INSERT INTO `kmellapp`.`profesion` (`id`, `descripcion_ocupacion`) VALUES (10, 'pintores');


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
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (7, 'Arreglo de tubos de baño');	
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (8, 'Hacer duplicado de llaves');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (9, 'Mantenimiento Carro');
INSERT INTO `kmellapp`.`servicios` (`id`, `descripcion_servicio`) VALUES (10, 'Pintar fachada de casa');


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

