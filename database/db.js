import mongoose  from 'mongoose';

const Connection = async (username = 'Suraj', password = 'Surajrajak07') => {
    const URL = `mongodb://${username}:${password}@ac-xxlhker-shard-00-00.h350jl8.mongodb.net:27017,ac-xxlhker-shard-00-01.h350jl8.mongodb.net:27017,ac-xxlhker-shard-00-02.h350jl8.mongodb.net:27017/?ssl=true&replicaSet=atlas-g1ufyi-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;