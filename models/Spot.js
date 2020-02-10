const mongoose = require("mongoose");
const { Schema } = mongoose;

const spotSchema = new Schema({
  name: String,
  region: String,
  type: [String],
  id: String
});

const Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
