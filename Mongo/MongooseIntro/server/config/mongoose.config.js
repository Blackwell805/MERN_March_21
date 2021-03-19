const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_mongoose_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection is set."))
    .catch(err => console.log("Something went wrong: ", err));