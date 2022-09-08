const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/newDate.js")
const port = process.env.PORT || 5000


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

let inputs = [];

app.get("/", function(req,res){

    let thisday = date;

    res.render("index", {day: thisday ,  newListItems: inputs});

});

app.post("/", function(req,res){
   let Input1 = req.body.in1;

   inputs.push(Input1);

    res.redirect("/");
})

app.listen(port, function(){
    console.log("Everythong is good and working on port 3000");
}) ;