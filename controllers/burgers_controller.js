//require Express
const express = require("express");
//requires burger.js                      
const burger = require("../models/burger.js");
//express routing           
const router = express.Router();

//GET REQUEST
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //holds burger data                  
        let burgerBurger = {
            burgers: data
        };
        //renders index.handlebars
        res.render("index", burgerBurger);
    });
});
//POST REQUEST - Create
router.post("/insertOne", function (req, res) {
    //passes data into HTML         
    //call it random name - potato    
    burger.insertOne(req.body.burger_name, function (param) {
        //redirects it to main page
        res.redirect("/")
    });
});
//POST REQUEST - Update
router.post("/updateOne/:id", function (req, res) {
    // holds burgers being devoured 
    const condition = "id = " + req.params.id;
    burger.updateOne({
        // Use updateOne from burger.js
        devoured: req.body.devoured
    }, condition, function () {
        //redirects it to main page                         
        res.redirect("/");
    });
});
//POST REQUEST - Delete
router.post("/deleteOne/:id", function (req, res) {
    // holds burger being deleted     
    const condition = "id = " + req.params.id;
    // Redirect to the homepage                 
    burger.deleteOne(condition, function () {
        res.redirect("/");
    });
});

module.exports = router;         