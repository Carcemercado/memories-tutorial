// Starting point for server application
import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

// Initialize server app
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// This needs to be secured later 
const CONNECTION_URL = 'mongodb+srv://javascript:javascript123@cluster0.smlqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(()=>{console.log('Running on port 5000')})
    .catch((error) => console.log(error.message));



// https://www.mongodb.com/cloud/atlas