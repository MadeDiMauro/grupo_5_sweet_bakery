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

