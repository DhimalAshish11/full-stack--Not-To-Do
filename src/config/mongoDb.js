import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== "production"
        ? "mongodb://127.0.0.1:27017/nottododb"
        : process.env.MONGO_CLIENT;

    /*  const con = await mongoose.connect("mongodb://127.0.0.1:27017/nottododb"); */
    const con = await mongoose.connect(dbLink);

    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
