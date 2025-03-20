const express  = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send("hello this is server page!!");
})

app.listen(3000,()=>{
    console.log("server start at port:3000");
})