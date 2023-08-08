import { useState } from 'react';
import './App.css';
import Card from './components/Card';
function App() {
  const [user, setUser]= useState({
    name: 'Bereket',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ullam itaque vel, corrupti quisquam est tempora perferendis libero culpa atque cumque veritatis harum accusamus, consequuntur soluta cum dolore labore eligendi.In eligendi, ullam nulla iste repellat labore accusantium quia minus ducimus eius commodi temporibus harum deserunt! Veritatis adipisci porro possimus consectetur suscipit error laboriosam. Quidem eum doloribus id minima sit?',
    image: 'https://thehatproject.com.au/cdn/shop/products/mens-brown-leather-flat-cap-side.jpg?v=1610164968',
    email: "bereket.nigussie@a2sv.org",
  })
  return (
    <div className="App">
      <Card user= {user}/>
       
    </div>
  );
}

export default App;
