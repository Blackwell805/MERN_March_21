// import mongoose
const mongoose = require('mongoose');

// and tell it to connect to our database running on port with new url parser and unified topology
mongoose.connect('mongodb://localhost/coffee_hub', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong: ", err));