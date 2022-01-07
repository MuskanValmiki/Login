const express = require("express");
const app = express();

const cookie = require('cookie');
app.use(express.json()); 

app.use("/",require("./Routes/router.js"))

app.listen(3000,()=>{
    console.log("server is running")
})