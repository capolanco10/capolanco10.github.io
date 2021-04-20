---
layout: post
title: Examen - Flexibility
date: 2021-04-20 08:47:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: examen.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [PruebaTecnica]
---
Proyecto base para prueba tecnica, contiene servicios rest con CRUD diferentes tablas en mysql, con documentación en swagger. No tiene interfaz frontend.

## Caracteristicas del proyecto
La prueba consiste en agregar nueva funcionalidad a la API REST que corre en este repositorio. Para eso vamos a guiarnos por los siguientes puntos:

1) Hacer un fork del repositorio, crear un nuevo branch y realizar las tareas enunciadas a continuación.
	> Se crea el fork https://github.com/caxsolutions/examen
	La rama se llama "carlospolanco"

2) Proveer servicios para la administración de la compra de productos. Los mismos deberán incluir:
- ABM de productos.
- ABM de clientes.
- Consulta de transacciones de compra.
- Aprobación de compras.
 
3) Los servicios deben contar con logs que indiquen si el servicio respondió y proceso correctamente o no.
4) Documentar brevemente los servicios implementados.
5) Todos los servicios deben contar, al menos, con test unitarios.
[localhost:8080/payments/swagger-ui/index.html?url=/payments/v3/api-docs](http://)
6) Enviar un Pull Request con todos los cambios realizados.

Para correr la aplicación se puede utilizar maven: 
```
mvn spring-boot:run -Drun.jvmArguments="-Dspring.profiles.active=local"
```

Pueden probar el servicio echo con un curl de la siguiente forma:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"message":"mensaje de prueba"}' localhost:8080/payments/echo`

Bonus

1. ABM de vendedores.
1. Agregar test de integración.
1. Calcular la cobertura de los tests.
1. Correr pruebas con base de datos en memoria.
1. Crear Docker Image.
1. Hostear la app en un cloud computing libre y enviar la URL para consultar.



![I and My friends]({{site.baseurl}}/assets/img/examen-package.png)
