const express = require("express");
const app = express();
const router = require("../routers/routes")
const port = process.env.PORT || 8000
require("../DB/dbConnection")
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req,res)=>{
    res.send("welcome to our home page")
})


app.listen(port, ()=>{
    console.log(`listing at port ${port}`)
})