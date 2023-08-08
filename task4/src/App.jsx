import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //line to use a counter state using useState hook
  const [count, setCount] = useState(0)


  // useEffect hook to update the dome docment title
  useEffect(()=>{
    document.title= `you have clicked ${count} times`
  }, [count])

  return (
    <div className="App">
      <div className="count_container">
        <p >{count}</p>
        <div className="button_container">
          <button className='inc btn' onClick={()=> setCount(count+1)}>Increment</button>
          <button className='dec btn' onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
