# Pastelería "Sweet Bakery"
### Link de Heroku App https://sweet-bakery-dh.herokuapp.com/

Proyecto integrador realizado grupalmente para el curso de Programador Web Full Stack de Digital House.

En este proyecto vamos a realizar un e-commerce para la pasteleria "Sweet Bakery", desde la misma los usuarios van a poder ver los productos, filtrar por categorias, realizar pedidos, registrarse como clientes y tambien pagar por los productos adheridos a su carrito.

### Listado de productos
- Postres
- Mini postres
- Budines
- Alfajores
- Cookies
- Croissant
- Macarons
- Productos secos
- Desayunos y boxes
- Giftcards

### Servicios ofrecidos
- Cursos virtuales

### Páginas de referencia
Las páginas elegidas fueron porque nos gustó el diseño de interfaz, la combinación de colores, la interacción y las funcionalidades que brindan.
https://ayulem.com.ar/
https://sentio.com.ar/
https://www.mauricioasta.com/
https://stevenbaker.de/
http://www.tantesara.com/

### Público objetivo
- Público en general

### Participantes
- Iñiguez Mariano
- Di Mauro Madeleine
- Lorenzo Aldana
- María Eugenia Brest

### Tablero de trabajo
Link: https://trello.com/b/DVWsCEdJ/proyecto-pasteleria-digital-house

### Resoluciones de pantalla
- Mobile: 0px a 480px
- Tablet: 481px a 768px
- Desktop: 769px a 1200px

### Usuario administrador
- E-mail: admin@gmail.com
- Password: 1234

### Base de datos y diagrama entidad relación
- Ubicados dentro de la carpeta /src/database/ del proyecto:
    - Script creación y carga de datos -> sweet_bakery.sql
    - Diagrama entidad relación -> der_sweet_bakery.pdf

### Índice y rutas del proyecto
- Home: http://localhost:3000/
- Listado de productos: http://localhost:3000/products/list
- Detalle de producto: http://localhost:3000/products/detail
- Carrito de compras: 
Paso 1: http://localhost:3000/cart/paso-uno | Paso 2: http://localhost:3000/cart/paso-dos | Paso 3: http://localhost:3000/cart/paso-tres |
- Login usuario: http://localhost:3000/users/login
- Registro usuario: http://localhost:3000/users/register
- Editar usuario: http://localhost:3000/users/edit
- Administración: http://localhost:3000/admin/  |  http://localhost:3000/admin/products  |  http://localhost:3000/admin/createProduct  |  http://localhost:3000/admin/editProduct/:id