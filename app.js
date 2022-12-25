 const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/newDate.js")
const mongoose = require("mongoose");
const port = process.env.PORT || 5000


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

let inputs = [];
const URL = "mongodb+srv://reroar666:*22Rounitms@cluster0.dccthsl.mongodb.net/?retryWrites=true&w=majority" 
const connect = mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
if(connect){
    console.log('Trueeee');
}


const itemsSchema = {
    name: String
};

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item ({
    name: "Welcome to my todolist"
})

const item2 = new Item ({
    name: "To add new item press the + button"
})

let defaultItems = [item1, item2];

Item.insertMany(defaultItems, function(err){
    if (err) {
        console.log(err);
    } else{
        console.log("Successfully saved to DB");
    }
});

app.get("/", function(req,res){

    Item.find({}, function(err,foundItems){
        // console.log(foundItems);
        res.render("index", {day: "thisday" ,  newListItems: foundItems});
    });

    let thisday = date;

    

});

app.post("/", function(req,res){
   let Input1 = req.body.in1;

   defaultItems.push(Input1);

    res.redirect("/");
})

app.listen(port, function(){
    console.log("Everything is good and working on port 5000");
}) ;