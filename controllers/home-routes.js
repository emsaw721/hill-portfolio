const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    console.log("============router.get/=============");
    if (req.session.loggedIn) {
        console.log("already loggedin, redirecting to /");
        res.redirect("/dashboard");
        return;
    } else {
        res.render('login');
    }
});

router.get("/login", (req, res) => {
    console.log("==================router.get/login=================");
    if (req.session.loggedIn) {
        console.log("already loggedin, redirecting to /");
        res.redirect("/dashboard");
        return;
    }
    console.log("not loggedin go to login page");
    res.render("login");
});

router.get("/signup", (req, res) => {
    console.log("===================router.get/signup====================");
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    res.render("signup");
});

router.get("/logout", (req, res) => {
    console.log("===================router.get/logout====================");
    req.session.destroy(() => {
        res.status(204).end();
    });
    res.render("login");
});

module.exports = router; 