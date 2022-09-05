const express = require("express");
const bodyParser = require("body-parser");
// const { append } = require("express/lib/response");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));
var inputs = [];

app.get("/", function(req,res){

    var today = new Date();

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long",
        
    }

    var thisday = today.toLocaleDateString("en-jp",options);

    res.render("list", {day: thisday ,  newListItems: inputs});






    // var currentDay = today.getDay();

    // if (currentDay === 1){
    //     res.render("list" , {day: "Monday"})
    //     // res.sendFile(__dirname + "/index.html");
    // }

    // else if (currentDay === 2 ){
    //     res.render("list", {day:"Tuesday" })
    // }

    // else if (currentDay === 3 ){
    //     res.render("list", {day: "Wednesday" })
    // }

    // else if (currentDay === 4 ){
    //     res.render("list", {day: "Thursday" })
    // }

    // else if (currentDay === 5  ){
    //     res.render("list", {day: "Friday" })
    // }

    // else if (currentDay === 6  ){
    //     res.render("list", {day: "Saturday" })
    // }

    // else if (currentDay === 0 ){
    //     res.render("list", {day: "Sunday" })
    // }    
    
});

app.post("/", function(req,res){
   var Input1 = req.body.in1;

   inputs.push(Input1);

    // console.log(Input1); 

    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Everythong is good and working on port 3000");
}) ;