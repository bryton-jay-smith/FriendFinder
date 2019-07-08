const express = require('express');
var bodyParser = require("body-parser");
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const friends = require('./app/data/friends.js');

require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

app.listen(PORT, function() {
    console.log("FriendFinder listening on PORT " + PORT);
});