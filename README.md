# Desafío - Soft Jobs

---

## Descripción

La empresa Soft Jobs ha iniciado el desarrollo de una plataforma que busca apoyar a la comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos para acumular experiencia laboral y mejorar sus oportunidades.
En este desafío serás backend developer de la empresa y deberás crear un servidor para la autenticación y autorización de usuarios usando JWT.
Deberás descargar el material de apoyo en el que encontrarás una aplicación cliente desarrollada con React preparada para consumir las rutas de tu servidor.

---

### Requerimientos

1. Registrar y obtener usuarios de la base de datos.

2. Usar middlewares para
    - Verificar la existencia de credenciales en la ruta que corresponda
    - Validar el token recibido en las cabeceras en la ruta que corresponda
    - Reportar por la terminal las consultas recibidas en el servidor

3. Firmar, verificar y decodificar tokens JWT

4. Capturar y devolver los posibles errores que ocurran en el servidor

5. Encriptar las contraseñas al momento de registrar nuevos usuarios

---

#### Ejecucion:

1. En la terminal de frontend ejecutar las siguientes sentencias:
	- npm i
	- npm run dev
2. En la terminal de backend ejecutar las siguientes sentencia:
	- npm init -y
	- npm i pg express dotenv
	- npm i nodemon -D
	- npm i cors
	- npm i jsonwebtoken
    - npm i bcryptjs
	- nodemon app.js  
---

⌨️Escrito con ❤️ y [Macarena Osses](https://github.com/Makaosva)