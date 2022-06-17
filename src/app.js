const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set ("view engine", "ejs");
app.set ("views", path.join (__dirname, "./views"));


app.use(express.static(path.join(__dirname, "../public")));

<<<<<<< HEAD
const routesProducts = require('./routes/products');
const routesCart = require('./routes/cart');
const routesUsers = require('./routes/users');
const routesCourses = require('./routes/courses');
const routesGiftcard = require('.routes/giftcard');
const routesMain = require('./routes/main');

app.use('/products', routesProducts);
app.use('/cart', routesCart);
app.use('/users', routesUsers);
app.use('/courses', routesCourses);
app.use('/giftcard',routesGiftcard);
app.use('/', routesMain);
=======
const productsRoutes = require('./routes/products');
const cartRutes = require('./routes/cart');
const usersRoutes = require('./routes/users');
const coursesRoutes = require('./routes/courses');
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');

app.use('/products', productsRoutes);
app.use('/cart', cartRutes);
app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);
>>>>>>> 0ca938cb673e28f6a9c0611312021f609e49a332


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
