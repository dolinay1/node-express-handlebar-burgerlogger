const connection = require("./connection.js");
//Select All ORM
const orm = {
    selectAll: function(table, callback) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //Insert 
    insertOne: function(gryffindor, hufflepuff, ravenclaw, callback) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [gryffindor, hufflepuff, ravenclaw], function(err, slytherin){
            if (err) throw err;
        callback(slytherin);
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