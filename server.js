//require express
const express = require("express");   
//require express-handlebars
const exphbs = require("express-handlebars");    
//require body-parser                                
const bodyParser = require("body-parser");                            
//require burgers_controllers
const routes = require("./controllers/burgers_controller.js");      
//express call using app
const app = express();                       
//local host port 8080                        
const PORT = process.env.PORT || 8080;                              

//public folder
app.use(express.static("public"));                                

//parses JSON
app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 

//handlebars run using main for content
app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               

//calls api routes
app.use(routes);                                                 

app.listen(PORT, function(){                             
console.log("Listening on Port: " + PORT);
});



