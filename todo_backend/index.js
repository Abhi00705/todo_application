const express=require('express');
import {todo_schema} from  './type'
const app=express();
const port=3000;

app.use(express.json());
/**
 * title: string,
 * discreption: string
 */

app.post('/todo', (req, res)=>{
    const create_payload=req.body;
    const parse_payload=todo_schema.safeParse(create_payload);
    if(!parse_payload.success){
        res.status(411).json({
            msg: "you send the wrong input"
        })
        return;
    }
    
    res.send("todo");
})

app.get("/todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{

})




app.listen(port , ()=>{
    console.log("server listening on port 3000");
})