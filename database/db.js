import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ytg6b4o-shard-00-00.30syokt.mongodb.net:27017,ac-ytg6b4o-shard-00-01.30syokt.mongodb.net:27017,ac-ytg6b4o-shard-00-02.30syokt.mongodb.net:27017/?ssl=true&replicaSet=atlas-gk3oxz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;