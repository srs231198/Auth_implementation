var express     = require("express"),
    app         = express()
    // bodyParser  = require("body-parser"),
    // mongoose    = require("mongoose")

app.set("view engine", "ejs");

//INDEX ROUTE
app.get("/", function(req, res) {
    res.render("home");
});

//SECRET ROUTE
app.get("/secret", function(req, res){
    res.render("secret");
});

app.listen(3000, function(){
    console.log("Server is running");
});