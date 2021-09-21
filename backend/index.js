import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';


// const express=require('express')
// const app=express()

// app.get("/",function (req,res) {
// 	res.send("test o j t")
// })


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


httpServer.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
  });
  