import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async() => {
    // const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-oykvezs-shard-00-00.nsgdcyr.mongodb.net:27017,ac-oykvezs-shard-00-01.nsgdcyr.mongodb.net:27017,ac-oykvezs-shard-00-02.nsgdcyr.mongodb.net:27017/?ssl=true&replicaSet=atlas-127lg7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb://127.0.0.1:27017/thatsit`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;