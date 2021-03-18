const express = require("express");
const app = express();

// our app needs to be able to accept json requests that are encoded in the url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("say something else now");
});

app.post("/api", (req, res) => {
  // do what you must and return something
  // if we have data coming through with the request, i.e. a form submission:
  var dataFromRequest = req.body;

  res.json(dataFromRequest);
});

app.put("/api", (req,res) => {
  res.json(req.body);
});

app.delete("/api/:something", (req, res) => {
  // to access route parameters
  var routeParam = req.params.something;

  res.send(`Your route parameter was ${routeParam}`);
})





app.listen(8000, () =>
  console.log(`Server is locked and loaded on port 8000!`)
);