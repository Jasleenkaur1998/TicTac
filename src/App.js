import { useState } from 'react';
import './App.css'
import Square from './components/square';

function App() {
  const [squares, setSqaures] = useState(Array(9).fill(null));
  const handleClick = () => {
  }
  return (
    <>
      <h2> The Tic Toe Game</h2>
      <div className="App">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

export default App;
