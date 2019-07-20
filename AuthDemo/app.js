var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    User                  = require("./models/user"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

//APP CONFIG
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

app.use(require("express-session")({
    secret: "what is 2 + 2?",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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