import dotenv from 'dotenv'
import conncetDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

conncetDB()
    .then(() => {
        app.on('error', (err) => {
            console.log("Error connecting to MongoDB: ", err);
            throw err
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening on ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed!!!", err)
    })



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