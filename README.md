# Challenge Telecom - Servidor

_Esta es la pequeña documentacion para hacer funcionar la API-REST_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas._
_En primer lugar necesitamos instalar los siguientes programas:_

* [nodeJS v14.17.0 (Recomendada)](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi)
_La instalacion es exclusiva de windows x64 bits._
_Una vez instalado nodeJS, se requiere acceder a una consola para instalar fastify CLI (esta instalacion puede ser optativa) con el siguiente comando:_

```
npm install fastify-cli --global
```

### Instalación 🔧

_La instalacion del servidor es muy sencilla, solo hay que instalar las liberias de nodeJS con el siguiente comando_

```
npm install
```
_el comando a continuacion es para instalar las dependencias de desarrollo, como nodemon y los types. No es necesario para pruebas o para usarlo en distribucion_

```
npm install -D
```
_En caso de no haber instalado de forma global el fastify CLI, se debe instalar de manera local con el siguiente comando:_
```
npm install fastify-cli
```



_Por ultimo en el archivo [package.json](https://github.com/JuanKitu/challengetelecom/blob/develop/package.json) en los scripts **"start"** y **"dev"** en el segmento **-a 192.168.0.116** debe ser borrado para usar como IP del server el **localhost** o agregar el IP deseado_
## Ejecutando el proyecto ⚡

_Para iniciar el proyecto solamente es necesario el siguiente comando:_
```
npm start
```
_Si quiere correr el programa en modo desarrolador (la diferencia es que si detecta algun cambio va a volver a ejecutar el servidor y que va a tener mejor formato los logs en la consola) debe usar el siguiente comando:_
```
npm run dev
```
## Testeando el proyecto 🔬
_Para hacer un testing completo del proyecto solo es necesario usar el siguiente comando: _
```
npm run test
```
## Construido con 🛠️

* [nodeJS](https://nodejs.org/es/docs/) - El entorno de ejecucion para JavaScript.
* [fastify](https://www.fastify.io/) - El framework web usado.
* [fastify-CLI](https://github.com/fastify/fastify-cli) - Es el CLI de fastify usado para estandarizar mejor el proyecto y ejecutarlo
* [node-fetch](https://github.com/node-fetch/node-fetch) - Un módulo ligero que lleva window.fetch a Node.js, usado para comunicarse con APIs externas.
* [Node Tap](https://node-tap.org/) - Es una libreria para hacer los test unitarios pedidos en el challenge
* [fastify-swagger](https://github.com/fastify/fastify-swagger) - Un complemento de Fastify para brindar una IU de Swagger, utilizando esquemas Swagger (OpenAPI v2)  generados automáticamente a partir de sus esquemas de ruta.
* [ESlint](https://eslint.org/) - Es una libreria usada para formatear el codigo en algun estandar, en este proyecto se utilizo el de AIRBNB
* [fastify-autoload](https://github.com/fastify/fastify-autoload) - Es un plugin de fastify que se encuentran en un directorio y configura automáticamente las rutas que coinciden con la estructura de la carpeta.
* [fastify-plugin](https://github.com/fastify/fastify-plugin) - Brinda contexto compartido a los diferentes complementos creados, viene incluido con el init del cli de fastify
* [fastify-sensible](https://github.com/fastify/fastify-sensible) - Este complemento agrega algunas utilidades a la instancia de Fastify, consulte la sección API para obtener más información.

## Autor ✒️
* **Juan Manuel Santa Cruz** - [JuanKitu](https://github.com/JuanKitu).
