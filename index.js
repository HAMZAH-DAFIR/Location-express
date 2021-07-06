const express = require('express');
const app = express();
const expressValidator = require('express-validator');

// recuperer les variable d'envirenement
require('dotenv').config();

// Router
const routesUser = require('./routers/auth');

const mongoose = require('mongoose');
// Connect to data base
mongoose.connect(process.env.DATABASE, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log('DATABASE is connect'))
   .catch(() => console.log('Not connect to DATABASE !!')); 

//-----> Middelwaares
app.use(express.json());
// app.use(expressValidator());

//routers
app.use('/api/user', routesUser);



const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`The app is running on port http://localhost/${port}`));