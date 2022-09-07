
module.exports = forDate();

function forDate(){
let today = new Date();

let options = {
    weekday : "long",
    day : "numeric",
    month : "long",
    
}

let thisDay = today.toLocaleDateString("en-in",options);
return thisDay;
}