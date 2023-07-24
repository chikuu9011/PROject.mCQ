import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionS = Schema({
  Qno:Number,
  name: String,
  Option: {},
  Answer: String,
});

const Qmodel = mongoose.model("Questions", QuestionS);

export default Qmodel;
