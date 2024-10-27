const Dotenv = require("dotenv")
Dotenv.config()
const Express = require("express");
const app = Express();
const Path = require("path");
const Port = process.env.PORT || 3000;

app.use("/Assets/Images", Express.static(Path.join(__dirname, 'Assets/Images')));
app.use("/Assets/CSS", Express.static(Path.join(__dirname, 'Assets/CSS')));


app.set("view engine", "ejs");
app.get("/", (req,res)=>
{
    return res.render("home");
});

app.listen(Port, ()=>{
    console.log(`App is running on ${Port}`);
});

