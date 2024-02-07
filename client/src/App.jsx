import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { updateTodo, addTodo, getAllTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    getAllTodo(setTodo)
  }, [])
  
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
          <button className="add" onClick={isUpdating ? () => updateTodo() :() => addTodo(text, setText, setTodo)}>
            {isUpdating ? "Update": "Add"}
          </button>
        </div>
        <div className="list">
          {todo.map((item) => <ToDo key={item._id} text={item.text} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
