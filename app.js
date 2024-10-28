const Dotenv = require("dotenv")
Dotenv.config()
const express = require("express");
const app = express();
const Path = require("path");
const Port = process.env.PORT || 3000;
const mongodburl = process.env.mongodb_url;
const connectToDB = require("./connection");
const userRoute = require("./route/routes");


app.use("/Assets/Images", express.static(Path.join(__dirname, 'Assets/Images')));
app.use("/Assets/CSS", express.static(Path.join(__dirname, 'Assets/CSS')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.get("/", (req,res)=>
{
    return res.render("home");
});

app.use('/', userRoute);

//Mongodb Connection
connectToDB(mongodburl)
.then(()=>{
    console.log("connected to DataBase");
})
.catch((err)=>
    {
        console.log(err)
    });


app.listen(Port, ()=>{
    console.log(`App is running on ${Port}`);
});

