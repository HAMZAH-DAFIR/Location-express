const express = require('express');
const app = express()
// recuperer les variable d'envirenement
require('dotenv').config();




const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`The app listining the port http://localhost/${port}`));