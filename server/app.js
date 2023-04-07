const dotenv =require("dotenv");
const mongoose = require ('mongoose');  
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
require('./db/conn');
const PORT = process.env.PORT;
app.use(express.json());
const User = require('./models/userSchema');

app.use(require('./routes/router'));



app.listen(PORT,()=>{
    console.log(`server is at port number ${PORT}`);
});