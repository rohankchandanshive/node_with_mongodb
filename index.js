const mongoose = require('mongoose');
const app = require('./src/app');
const dotenv = require('dotenv');
dotenv.config()

mongoose.set('strictQuery', false);      // set to false because if we want to add additional property other than specified in the model we need to set flag as false if not to then set it to true


const PORT = process.env.PORT || 3000;

const connectMongoDB = async() => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@users.jzvnpgy.mongodb.net`)

        app.listen(PORT,()=>{
            console.log('listening on port: ', PORT);
        });
    }catch(err){
        console.error("Error connecting MongoDB ! >>", err.message)
    }
}

connectMongoDB();
