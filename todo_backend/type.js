const z=require('zod');

const todo_schema=z.object({
    title:zod.string(),
    discription:zod.string()
})

const update_todo = zod.object({
    id: zod.string()
})

module.exports={
    create_todo:todo_schema, 
    update_todo: update_todo
};