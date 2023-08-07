import React, { useState } from 'react'
import './App.css';
import Input from './Componenets/Input.tsx';
import Todos from './Componenets/Todos.tsx';
import { TodosModel } from './models/TodosModel';

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos]= useState<TodosModel[]>([])
  function addTodo(e:React.FormEvent) {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }
  return (

    <div className="App">
      <span className='heading'>taskify</span>
      <Input todo= {todo} setTodo={setTodo} addTodo= {addTodo}/>
      <Todos setTodos={setTodos} todos= {todos}/>
    </div>
  );
}

export default App;
