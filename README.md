# Backend del MPV para Trabook

Este proyecto corresponde al Backend realizado con Node.js, Postgresql. A continuación relaciono los pasos para poder iniciar con el proyecto:

**_Nota:_** Asegurate de tener instalado Node.js y Postgresql, de este ultimo debes tener claro el usuario y contraseña para poder ingresar a la base de datos.\*

## 1. Clonar el repositorio:

Abre una terminal, copia el siguiente comando y oprime la tecla enter:

```
git clone
```

## 2. Instalar las dependencias:

Una vez termine de clonar el repositorio, ingresa a la carpeta del proyecto con el siguiente comando dentro de la misma terminal:

```
cd backendtrabook
```

Cuando hayas ingresado a la carpeta del proyecto, debes ejecutar el siguiente comando para poder instalar las dependencias:

```
npm i
```

## 3. Modificación del usuario y contraseña de la Base de Datos:

Dentro de la carpeta del proyecto busca y abre un archivo llamado _config.js_ dentro del cual tendrás que cambiar los campos _user_ y _password_ por el usuario y contraseña con los que accedes a Postgresql. No olvides guardar los cambios.

## 4. Creación de la base de datos:

En la terminal debes acceder al Postgresql con el siguiente comando:

```
psql -U usuario
```

Donde usuario lo debes reemplazar con el usuario que create en Postgresql, puede ser _postgres_ o _root_.

Seguido de esto deberas ingresar tu contraseña.

Una vez hayas ingresado correctamente a Postgresql, deberás ejecutar el siguiente comando:

```
CREATE DATABASE trabookdb;
```

Si la base de datos se creo correctamente en la terminas podrás ver el mensaje _CRETATE DATABASE_.

## 5. Creación de tablas:

Una vez creada la base de datos, en la terminal ejecuta el comando _node trabookdb.js_ y si todo esta correcto, por consola deberias ver los siguientes mensajes:

_Tabla ofertas creada_\
_Tabla planes creada_\
_Tabla testimonios creada_\
_Tabla blog creada_\
_Todas las tablas han sido creadas._\
_Datos insertados en la tabla ofertas_\
_Datos insertados en la tabla planes_\
_Datos insertados en la tabla testimonios_\
_Datos insertados en la tabla blog_\
_Inserciones completadas._

Los cuales confirman que se crearon las tablas con el contenido que se enviaran al front.

## 6. Iniciar el servidor:

Cuando ya se hayan creado las tablas con su contenido, debemos iniciar el servidor con el siguiente comando:

```
npm run dev
```

Y dentro de la consola podras ver que el servidor se esta ejecutando el en puerto 4000m lo que quiere decir que en el navegador deberás visitar _localhost:4000_ y para verificar que este leyendo los datos de las tablas deberas visitar las siguientes rutas:

_localhost:4000/ofertas_\
_localhost:4000/planes_\
_localhost:4000/testimonios_\
_localhost:4000/blog_

## 7. Iniciar el Frontend de Trabook:

Para iniciar el Front de la aplicación debes visitar el siguiente [enlace](www.google.com)
