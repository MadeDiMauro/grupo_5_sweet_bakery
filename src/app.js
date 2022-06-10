const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.set ("view engine", "ejs");
app.set ("views", path.join (__dirname, "./views"));


app.use(express.static(path.join(__dirname, "../public")));

const routesProducts = require('./routes/products');
const routesCart = require('./routes/cart');
const routesUsers = require('./routes/users');
const routesCourses = require('./routes/courses');
const routesMain = require('./routes/main');

app.use('/products', routesProducts);
app.use('/cart', routesCart);
app.use('/users', routesUsers);
app.use('/courses', routesCourses);
app.use('/', routesMain);

