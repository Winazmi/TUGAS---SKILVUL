const express = require("express");
const app = express();
const PORT = 3000;

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
app.use(cookieParser());

const oneMinute = 1000 * 60;

app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneMinute },
    resave: false,
  })
);

const myusername = "user1";
const mypassword = "mypassword";

var session;

app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send(
            "Welcome to <a href='/logout'> click here to logout</a>"
        );
    } else {
        res.sendFile("views/index.html", { root: "views" });
    }
});

app.post("/user", (req, res) => {
    if (req.body.username == myusername && req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session);
        res.send(`Hei ${myusername} , welcome back! <a href=\'/logout'>click to logout</a>`);
    } else {
        res.send("Invalid username or password");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("server is listening on port", PORT);
});