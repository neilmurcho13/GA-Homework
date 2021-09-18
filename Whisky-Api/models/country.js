import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  whisky: [{ type: mongoose.Types.ObjectId, ref: "Whisky" }],
  // movies: [{ type: mongoose.Types.ObjectId, ref: 'Movie' }],
});

countrySchema.plugin(mongooseUniqueValidator);

// this is the link between the code we are writing and the database.
//
const Country = mongoose.model("Country", countrySchema);

export default Country;
