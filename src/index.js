const express = require("express");
const app = express();
const router = require("../routers/routes")
const port = process.env.PORT || 8000
require("../DB/dbConnection")


app.use(router);
app.use(express.json());

app.get("/", (req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.send("welcome to our home page")
})


app.listen(port, ()=>{
    console.log(`listing at port ${port}`)
})