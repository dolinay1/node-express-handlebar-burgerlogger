const connection = require("./connection.js");

const orm = {
    selectAll: function(table, callback) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //Insert 
    insertOne: function(item1, item2, item3, callback) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [item1, item2, item3], function(err, param){
            if (err) throw err;
        callback(param);
    });
    },
    //Update
    updateOne: function(colVal, id, callback) {
    const queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result) {
      
            if (err) throw err;
      
        callback(result);
        });
    },
    //Delete
    deleteOne: function(id, callback) {
        const queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}
//Exports ORM
module.exports = orm;