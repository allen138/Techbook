require("dotenv").config();
const express = require("express");
const passport = require("passport");
const authRoutes = require("./routes/index");

const db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use('/auth', authRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("tech-startup/build"));
}

var syncOptions = { force: false };

if(process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

//create login route
app.get('/', (req, res) => {
    res.render('home');
});


db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
});
