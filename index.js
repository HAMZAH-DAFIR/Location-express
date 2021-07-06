const express = require('express');
const app = express();
// recuperer les variable d'envirenement
require('dotenv').config();

// Router
const routesrUser = require('./routers/auth');

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

//routers
app.use('/api/user', routesrUser);



const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`The app is running on port http://localhost/${port}`));