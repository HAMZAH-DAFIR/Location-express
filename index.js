const express = require('express');
const app = express()
// recuperer les variable d'envirenement
require('dotenv').config();

const mongoose = require('mongoose');
// Connect to data base
mongoose.connect(process.env.DATABASE, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log('DATABASE is connect'))
   .catch(() => console.log('Not connect to DATABASE !!')); 




const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`The app is running on port http://localhost/${port}`));