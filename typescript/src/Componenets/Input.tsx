import React, { useRef } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import './style.css'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: Function;
};

const Input: React.FC<props> = ({todo, setTodo, addTodo}) => {
    const inputRef= useRef<HTMLInputElement>(null)
    return (
        <form className='input__box' onSubmit={(e)=> {
            addTodo(e)
            inputRef.current?.blur()
        }}>
            <input ref={inputRef} className='input' type='text' placeholder='Enter Todo' value={todo} onChange={e => setTodo(e.target.value)} />
            <button className='submit__btn' type='submit'><AiOutlineArrowRight/></button>
        </form>
    );
}

export default Input;