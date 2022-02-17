// init project
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// An in-memory data store
var users = ["Brad Pitt", "Ed Norton", "Denzel Washington"];

// Use bodyParser to parse application/x-www-form-urlencoded form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Data from POST to `/new` is parsed with body-parser: http://expressjs.com/en/api.html#req.body
app.post("/new", urlencodedParser, function(request, response) {
  users.push(request.body.user);
  response.redirect("/");
});

// Send user data - used by client.js
app.get("/users", function(request, response) {
  response.send(users);
});

// Serve the root url: http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile("/sandbox/views/index.html");
});

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
