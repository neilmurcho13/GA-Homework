import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-Unique-validator'

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 }
}, { timestamps: true }
);


const whiskySchema = new mongoose.Schema({
    name: String,
    distillery: String,
    type: String,
    age: Number,
    strength: String,
    image: String,
    comments: [commentSchema],
})

whiskySchema.plugin(mongooseUniqueValidator);

const WhiskySearch = mongoose.model("Whisky", whiskySchema);

export default WhiskySearch;