import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
