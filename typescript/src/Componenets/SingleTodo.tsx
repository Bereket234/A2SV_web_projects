import React, { useRef, useState } from 'react';
import "./style.css"
import { TodosModel } from '../models/TodosModel';
import { AiOutlineCheck, AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai'
import {MdOutlineDeleteOutline } from 'react-icons/md'

interface props{
    index: number;
    todo: TodosModel;
    setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTodo: React.FC<props> = ({index, todo, setTodos, todos}) => {
    const [isEditting, setIsEdditing] = useState<boolean>(false)
    const [currTodo, setCurrTodo] = useState<string>(todo.todo)
    const inputRef= useRef<HTMLInputElement>(null)

    const handleMarkingTodo= (id)=>{
        setTodos(
            todos.map(data=> 
                data.id === id? {...data, isDone: !data.isDone }: data
                )
        )
    }

    const handleDelete= (id) => {
        setTodos(todos.filter(data=> data.id !== id))
    }

    const handleEdit = (id) => {
        setTodos(
            todos.map(data=> 
                data.id === id? {...data, todo: currTodo }: data
            )
        )
    }

    return (
        <div className={todo.isDone? 'single__todo is__done' : 'single__todo'}>
            {!isEditting? <span className='todo_text'>{todo.todo}</span>:
            <div style={{position:'relative'}}>
                <input 
                    ref= {inputRef} 
                    type='text' 
                    className='edit' 
                    value={currTodo} 
                    onChange={(e)=>setCurrTodo(e.target.value)}
                />
                <AiOutlineCheck 
                    style={{position:"absolute", right:"10px", top:"12px", fontSize:"20px"}}
                    onClick={()=>
                        {
                            setIsEdditing(false)
                            handleEdit(todo.id)
                    }
                    }
                />
            </div>
            }
            <div className='icon_contaier'>
                {!isEditting && 
                    <AiOutlineEdit 
                        className='icon' 
                        onClick={()=> {
                            setIsEdditing(true)
                            inputRef.current?.focus()
                        }}
                    /> 
                }
                <MdOutlineDeleteOutline className='icon' style={{color:"red"}} onClick={()=> handleDelete(todo.id)}/>
                <AiOutlineCheckCircle className='icon' style={{color: "green"}} onClick={()=> handleMarkingTodo(todo.id)}/> 
            </div>
            
        </div>
    );
}

export default SingleTodo;