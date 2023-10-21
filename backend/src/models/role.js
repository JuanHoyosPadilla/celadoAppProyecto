import { Schema, model } from "mongoose";

const Roleschema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", Roleschema);
