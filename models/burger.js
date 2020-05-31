//require ORM
const orm = require("../config/orm.js");                                                                 

//burger variable and callback function 
const burger = {
    selectAll: function(callback) {                                         
        orm.selectAll("burgers", function(res) {                            
            callback(res);
        });
    },  

    //insert function
    insertOne: function (cheese, cb) {
        orm.insertOne("burgers", "burger_name", cheese, function (buns) {
            console.log("burgerJS cheese: ", cheese, "buns: ", buns);
            cb(buns);
        });
    },
    //update function
    updateOne: function(colVal, id, cb) {
        orm.updateOne(colVal, id, function(res) {
            cb(res);
        });
    },
    //delete function
    deleteOne: function(id, cb) {
        orm.deleteOne(id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;