const express=require('express');

const app=express();
const port=3000;

app.use(express.json());
/**
 * title: string,
 * discreption: string
 */

app.post('/todo', (req, res)=>{
    const todo_data=req.body;
    
    res.send("todo");
})

app.get("/todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{

})




app.listen(port , ()=>{
    console.log("server listening on port 3000");
})