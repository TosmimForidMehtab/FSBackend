import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Failed to connect DB ${error.message}`);
    }
};

export default connectDB;
