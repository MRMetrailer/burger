// Dependencies
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');
var routes = require("./controllers/burgers_controller");
var app = express();
var PORT = process.env.PORT || 3000;
// Config Settings
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");
app.use("/", routes);
app.use(express.static('public'));
// Listener
app.listen(PORT,function(){
    console.log("App now listening at localhost:" + PORT);
});
