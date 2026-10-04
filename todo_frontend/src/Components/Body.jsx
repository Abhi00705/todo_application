import { useCallback, useEffect, useState } from 'react';
import './Body.css';

export const Body = () => {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [todoList, setTodoList]=useState([]);

  const getTodoList = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      if (!response.ok) throw new Error(`Could not load todos: ${response.status}`);
      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const postTodo = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/todo', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error(`Could not add todo: ${response.status}`);
      await getTodoList();
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  // console.log(todoList);

  return (
    <main className="todo-page">
      <section className="todo-panel">
        <form className="todo-form" onSubmit={postTodo}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <button type="submit">Add task</button>
          
        </form>
        
       <div className="todo-list">
        <ul>
        {
          todoList.map((todo)=>{
            return(
              
                <li key={todo._id}>
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </li>
              
            )
          })
        }
        </ul>

        </div>
      </section>
    </main>
  );
};
