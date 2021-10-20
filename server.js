const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
// const port = 3000;
//Sets and views template project
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Express of get Req and res
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routers
const routerIndex = require('./routes/index');
router.get('/', routerIndex);
router.get('/find', routerIndex);

//Dir of folder public 
app.use(express.static(__dirname + ('/public')));
app.use(router);

//Server listen 
app.listen(process.env.PORT || 5000);

module.exports = router;