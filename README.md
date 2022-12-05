# Inventario Cafeterias Konecta

Aplicación de página única (Single-Page Application) desarrollada sobre el stack MERN (MongoDB, ExpressJS, ReactJS y Node.js), que permite el registro, eliminación, actualización (reposición), y venta de los productos del inventariado de cafeterías para la empresa **Konecta**.

## Índice

- [Guía de instalación](#guía-de-instalacion)
- [Scripts disponibles](#scripts-disponibles)
- [Tecnologías](#tecnologías)
- [Descripción técnica](#descripción-técnica)
- [Descripción funcional: casos de uso](#descripción-funcional-casos-de-uso)

## Guía de instalación

**NOTA:** esta guía asume que ambos **Node.js** como **MongoDB** estén instalados en el sistema usuario de esta aplicación, contando además con una instanacia local de base de datos de MongoDB ejecutando en _localhost:27017_.

Visita el sitio web de este repositorio: https://github.com/argon956/InventarioCafeteriasKonecta

Abre una terminal y clona el proyecto al directorio deseado mediante el siguiente comando:

`> git clone https://github.com/argon956/InventarioCafeteriasKonecta`

Navega al directorio del clon de repositorio, y ejecuta:

`npm install`

## Scripts disponibles

En el directorio del proyecto, se tienen que ejecutar los siguientes comandos en terminales independientes para hacer funcionar la aplicación:

### `npm run dev-backend`

Ejecuta el _backend_ de la aplicación en modo productivo.\
El servidor de Express se ejecuta en la dirección `http://localhost:3000`.

### `npm run dev-frontend`

Ejecuta el _frontend_ de la aplicación en modo productivo.\
Navega a la dirección [http://localhost:4000/admin](http://localhost:4000/admin) en un navegador web para mostrarlo.

La página se recargará con los cambios realizados en cualquier fichero del proyecto.\
Los errores del linter del proyecto se mostrarán en la consola.

## Tecnologías

Se describen a continuación las tecnologías empleadas para el desarrollo de éste proyecto:

- `Node.js` v18.12.1
- `Express.js` 4.18.2
- `Axios` 1.2.0
- `MongoDB`
  - `Mongoose` 6.7.4
- `TailwindCSS` 3.2.4
- `PostCSS` 8.4.19
- `Vite` 3.2.4

## Descripción técnica

El proyecto consta de la siguiente estructura, con detalle de los ficheros más relevantes:

```
src
├── components
├── context
├── controllers
├── hooks
├── layouts
├── models
├── pages
├── routes
├── server
├── App.jsx
├── index.jsx
.env
index.html
postcss.config.cjs
tailwind.config.cjs
vite.config.js

```

A continuación se describen los casos de uso de la aplicación:

- La aplicación carga la **página de administración** al inicio. En él, el usuario puede realizar las siguientes acciones:
  - En la **barra superior**:
    - Barra de navegación visible tanto en la página de administración como en la página de ventas
  - En la **mitad izquierda**:
    - Agregar productos nuevos en el formulario de la mitad izquierda
    - Consultar el producto con mayor stock y el producto con mayor número de ventas pulsando el botón con la descripción correspondiente, en la parte inferior del formulario. Los resultados de la consulta se mostrarán en las tarjetas, identificados por los títulos correspondientes
  - En la **mitad derecha**, con los botones de cada tarjeta de producto:
    - Editar productos existentes a salvedad del campo _referencia_ (como criterio de unicidad de los productos agregados), reutilizando el formulario de la mitad izquierda
    - Eliminar los productos existentes
- En la **página de ventas**:
  - Realizar la venta de productos, mediante el campo de cantidad y el botón de venta de la tarjeta correspondiente a cada producto
