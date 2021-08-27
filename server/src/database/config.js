import mongoose from  'mongoose';

const dbConnection = async (stringconnection) =>{
    try {
        
        await mongoose.connect( stringconnection, {
            maxPoolSize: 50, 
            wtimeoutMS: 2500,
            useNewUrlParser: true

        });

        console.log('DB Online');

    } catch (error) {

        console.log (error);
        throw new Error('Error a la hora de inicializar BD');
        
    }
}

export default dbConnection;