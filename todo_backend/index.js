const express=require('express');
const cors=require('cors');
const {todo} = require('./db.js');
const {create_todo, update_todo} = require('./type.js');
const { success } = require('zod');
const app=express();
const port=3000;

app.use(express.json());
app.use(cors())
/**
 * title: string,
 * discreption: string
 */

app.post('/todo', async (req, res)=>{
    const create_payload=req.body;
    const parse_payload=create_todo.safeParse(create_payload);
    if(!parse_payload.success){
        res.status(411).json({
            msg: "you send the wrong input"
        })
        return;
    }
    await todo.create({
        title: create_payload.title,
        description: create_payload.description,
        complete: false
    })
    // task.save();
    res.json({
        "status":"success"
    });
})

app.get("/todos", async(req, res)=>{
    const todos = await todo.find({});
    console.log(todos);
    res.json(todos);
})

app.put("/completed", async (req, res)=>{
    const update_payload = req.body;
    const parse_payload = update_todo.safeParse(update_payload);
    if(!parse_payload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    const result = await todo.updateOne({
        _id: parse_payload.data.id
    },{
        $set: { complete: true }
    })
    if (result.matchedCount === 0) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    res.json({
        msg: "Todo marked as completed"
    })
})




app.listen(port , ()=>{
    console.log("server listening on port 3000");
})
