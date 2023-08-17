import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  unit_cost: {
    type: Number,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
