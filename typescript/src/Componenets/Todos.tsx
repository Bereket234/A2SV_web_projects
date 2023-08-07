import React from 'react';
import { TodosModel } from '../models/TodosModel';
import SingleTodo from './SingleTodo.tsx';
// import { TodosModel } from './../models/TodosModel';


interface props{
    todos: TodosModel[];
    setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const  Todos : React.FC<props> = ({todos, setTodos}) => {
    return (
        <ul>
            {todos.map((todo, index)=> {
                return (<SingleTodo setTodos={setTodos} todos={todos} key={index} todo={todo} index= {index} />)
            }) 
            }
        </ul>
    );
}

export default Todos;