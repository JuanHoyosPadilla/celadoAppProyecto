import * as dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from 'cors'
import fileUpload from 'express-fileupload';
const app = express();
import loginRotes from './routes/login.routes.js'
import userRotes from './routes/user.routes.js'

// CONEXION A LA BASE DE DATOS MONGODB
import './conexionDB.js';
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./uploads'
}))

//CONFIGURACION DE LAS RUTAS
app.use('/api',loginRotes);
app.use('/api',userRotes);


export default app
