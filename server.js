let express = require("express");
let session = require("express-session");
let flash = require("express-flash");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
let bcrypt = require("bcrypt");
let PORT = 1337;

let app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(session({secret: "secret stuff"}));
app.use(express.static(__dirname+"/client/dist")); 

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(PORT,()=>{
    console.log("Listening on:", PORT)
});