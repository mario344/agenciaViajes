// importar express
const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const configs = require('./config');
require('dotenv').config({
    path: 'variables.env'
});

//const db = require('./config/database') 

/*db.authenticate()
    .then(()=> console.log('DB CONECTADA'))
    .catch(error => console.log(error)); 
*/

// configurar express
const app = express();

//habilita pug
app.set('view engine','pug'); 
//añadir vistas
app.set('views', path.join(__dirname, './views'));

//carga la carpeta estatica public
app.use(express.static('public'));

//validacion de desarrollo o production
const config = configs[app.get('env')]

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio

//muestra el año actual y genera ruta actual
app.use((req,res,next) =>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); 
    res.locals.ruta = req.path;
    return next();   //middleware para que se pase a al otro middleware
})

//ejecutamos body
app.use(bodyParser.urlencoded({extended: true}));

//carga las rutas
app.use('/',routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;



app.listen(port, host, ()=>{
    console.log('El servidor esta ok'); 
});





