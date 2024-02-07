import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { deleteTodo, updateTodo, addTodo, getAllTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, settTodoId] = useState('');

  useEffect(() => {
    getAllTodo(setTodo)
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    settTodoId(_id);
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input 
          type='text' 
          placeholder='Add ToDos...'
          value={text}
          onChange={(e) => setText(e.target.value)}  
          />
          <button
          className="add" 
          onClick={isUpdating ? 
            () => updateTodo(todoId, text, setText, setTodo, setIsUpdating) 
            :() => addTodo(text, setText, setTodo)}>
            {isUpdating ? "Update": "Add"}
          </button>
        </div>
        <div className="list">
          {todo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteTodo={() => deleteTodo(item._id, setTodo)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
