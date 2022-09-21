const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrySchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity cannot be less than 1."],
        default: 1,
      },
    },
  ],
});

module.exports = Registry = mongoose.model("registry", RegistrySchema);
