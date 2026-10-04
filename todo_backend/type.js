const z=require('zod');

const todo_schema=z.object({
    title:z.string(),
    description:z.string()
})

const update_todo = z.object({
    id: z.string()
})

module.exports={
    create_todo:todo_schema, 
    update_todo: update_todo
};
