const express=require('express')
const colors=require('colors')
const moragan=require('morgan')
const dotenv=require('dotenv');
const { connectDB } = require('./config/db');

//dotenv config

dotenv.config();
//mongodb connection
connectDB();
//rest object
const app=express()

//middleware
app.use(express.json())
app.use(moragan('dev'))

//routes

app.use('/api/v1/user',require('./routes/userroutes'))

//PORT
const port=process.env.PORT || 4040

//listen port
app.listen(port, ()=> 
console.log(`server running ${process.env.NODE_MODE} Node on port ${process.env.port}`.bgCyan.white)
);



