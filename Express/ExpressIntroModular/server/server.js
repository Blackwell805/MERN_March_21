const express = require('express');
const app = express();
// const routes = require('./routes/routes');

// for parsing json requests from urls for form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes(app);

require('./routes/routes')(app);


app.listen(8000, () => console.log("Now listening on port 8000"));