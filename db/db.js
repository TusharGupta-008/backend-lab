import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected succesfully ...!");
  } catch (error) {
    console.log("Database is not connected ...!");
  }
};

export default connectDb
