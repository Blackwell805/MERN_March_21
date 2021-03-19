// Step 1: Import Mongoose
const mongoose = require('mongoose');

// Step 2: Create your schema (aka your rules for creating a new thing)
const SuperHeroSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: "??",
        minlength: [2, "Your first name cannot be fewer than 2 characters"]
    },
    lastName: {
        type: String,
        default: "??",
        maxlength: [30, "Server space isn't free, you know?"]
    },
    alias: {
        type: String,
        required: [true, "You need to give us a supername."],
        minlength: [4, "Your supername must be at least 4 characters long."]
    },
    citizensSaved: {
        type: Number,
        default: 0,
        max: [1000, "Ok, are you purposely putting people in danger to pad your numbers?"]
    },
    powers: [String]
}, { timestamps: true });

// Step 3: Convert your schema into a mongoose model, so we can later make queries with it
const SuperHero = mongoose.model('superhero', SuperHeroSchema);

// Step 4: Export our model so we can use it in our controllers
module.exports = SuperHero;