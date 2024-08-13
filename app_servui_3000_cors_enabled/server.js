const express=require('express');
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyparser=require("body-parser");
const path= require('path');
const cors = require('cors'); 

const connectDB=require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'});
const PORT= process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// mongo db connection

connectDB();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', // For local development, adjust as needed for production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// parse req to body parser
app.use(bodyparser.urlencoded({extended: true}));

// set view engine

app.set("view engine","ejs");

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT,()=> { console.log('Server is running on http://localhost:'.concat(PORT))} );