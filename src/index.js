import dotenv from 'dotenv'
import express from "express";
import conncetDB from "./db/index.js";

dotenv.config({
    path: './env'
})


conncetDB()


const app = express();











/*
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error', (err) => {
            console.log("Error connecting to MongoDB: ", err);
            throw err
        });
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, (err) => { 
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error", error);
    }
})()
*/