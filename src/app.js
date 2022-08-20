const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const session = require('express-session'); /*agregué session*/
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); /* y también el userLoggedMiddleware que debería ser un middleware de aplicación*/
const cookieParser = require('cookie-parser');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "shh, It's a secret",  /*agregué session con app.use para que corra por todos lados*/
    resave: false,
    saveUninitialized: false,
}));
app.use(cookieParser());
/*app.use(userLoggedMiddleware);  /*middleware de aplicación que tienen que colocarse después de session*/


const routesProducts = require('./routes/products');
const routesCart = require('./routes/cart');
const routesUsers = require('./routes/users');
const routesAdmin = require('./routes/admin');
const routesCourses = require('./routes/courses');
const routesGiftcard = require('./routes/giftcard');
const routesMain = require('./routes/main');

app.use('/products', routesProducts);
app.use('/cart', routesCart);
app.use('/users', routesUsers);
app.use('/admin', routesAdmin);
app.use('/courses', routesCourses);
app.use('/giftcard', routesGiftcard);
app.use('/', routesMain);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



