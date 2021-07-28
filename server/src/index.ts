const express = require("express");
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Constants

const PORT = 4000;

//Importing routes

const userRoutes = require('./routes/user');

//Settings

app.set('port', process.env.PORT || PORT);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'the_typist_db'
}, 'single'));

// routes
app.use('/user', userRoutes);


app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});