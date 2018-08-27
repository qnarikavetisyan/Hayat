var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("menu/about.html");
});

app.listen(8080, function(){
   console.log("Hayat is running on port 8080");
});