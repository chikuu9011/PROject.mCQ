import mongoose from "mongoose";

const Connection = async () => {
  //   return await mongoose.connect("mongodb+srv://:<>@cluster0.nhm1ykz.mongodb.net/?retryWrites=true&w=majority")
  // }

  return await mongoose.connect(
    "mongodb+srv://chikuu_9800:7741086495@cluster0.nhm1ykz.mongodb.net/"
  );
};

export default Connection;
