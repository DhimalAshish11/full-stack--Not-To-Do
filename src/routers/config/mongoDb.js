import mongoose from "mongoose";
export const mongoConnect = () => {
  try {
    const con = mongoose.connect("mongodb");
  } catch (error) {}
};
