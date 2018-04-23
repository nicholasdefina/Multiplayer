var mongoose = require('mongoose');
var User = mongoose.model('User');
const bcrypt = require("bcryptjs");


module.exports =
    {
        create: function (req, res) {
            var user = new User({ first: req.body.first, last: req.body.last, email: req.body.email, password: req.body.password })
            User.find({ email: req.body.email }, function (error, user) {
                if (user.length >= 1) {
                    res.json({ "emailError": "That email already exists in the database. Choose a different one." })
                }
                else {
                    console.log(req.body.password)
                    console.log(req.body.confirm)
                    if (req.body.password == req.body.confirm) {
                        var hash = bcrypt.hashSync(req.body.password, 8)
                        var user = new User
                            ({
                                first: req.body.first,
                                last: req.body.last,
                                email: req.body.email,
                                password: hash,
                            });
                        console.log(user)
                        user.save(function (err) {
                            if (err) {
                                res.render("home", { errors: user.errors })
                            }
                            else {

                                console.log("data received");
                                req.session.userid = user._id;
                                console.log(user._id)
                                res.json({ message: "success", user: user });
                            }
                        })
                    }
                    else {
                        res.json({ "Password Error": "Passwords do not match." })
                    }
                }
            })
        },
        getUsers: function (req, res) {
            User.find({}, function (err, users) {
                if (err) {
                    console.log("Returned error", err);
                    res.json({ message: "Error", error: err.message })
                }
                else {
                    console.log(users)
                    res.json({data: users })
                }
            }).sort('field first')
        },
        getScores: function (req, res) {
            User.find({}, function (err, users) {
                if (err) {
                    console.log("Returned error", err);
                    res.json({ message: "Error", error: err.message })
                }
                else {
                    console.log(users)
                    res.json({data: users })
                }
            }).sort('field score')
        }
    }
