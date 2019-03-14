const express = require("express");
const router = express.Router();

const User = require("../../models/Users");

router.get("/", (req, res) => {
    User.find()
        .sort({
            date: -1
        })
        .then(users => (res.json(users)))
})

router.post("/", (req, res) => {
    const newUser = new User ({
        username: req.body.username,
        password: req.body.password,
        stanley: req.body.stanley
    });
    newUser.save()
        .then(user => res.json(user));
});

module.exports = router;

