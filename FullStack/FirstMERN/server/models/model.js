// Step 1: Import mongoose
const mongoose = require('mongoose');

// Step 2: Create a schema (aka a set of rules for our models to adhere to)
const CoffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Coffee name is required"],
        minlength: [3, "Coffee name must be at least 3 characters in length."]
    },
    beanType: {
        type: String,
        required: [true, "Bean type is required"],
        minlength: [4, "Bean type must be at least 4 characters in length."]
    },
    withMilk: {
        type: Boolean,
        default: false
    },
    withSugar: { 
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Step 3: Create a mongoose model out of that schema
const Coffee = mongoose.model('coffee', CoffeeSchema);

// Step 4: export that model
module.exports = Coffee;