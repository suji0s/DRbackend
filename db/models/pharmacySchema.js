import { Schema, model } from "mongoose";

const pharamcySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
});

const Pharamcy = model("Pharamcy", pharamcySchema);
export default Pharamcy;
