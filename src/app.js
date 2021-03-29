const express = require("express");
const path = require("path");
const ejs= require("ejs")
const app = express();
const port = 8000;

// path selection 

app.set("view engine","ejs");
app.set('views', path.join(__dirname, '../views'));
const staticPath= path.join(__dirname,"../public")
app.use(express.static(staticPath));


//routing 
app.get("",(req, res)=>{
    res.render("index");
});
app.get("/weather",(req, res)=>{
    res.render("weather");
});
app.get("/about",(req, res)=>{
    res.render("about");
});


app.listen(port ,()=>{
    console.log(`App is successfully running on port ${port} `)
})