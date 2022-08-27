import { useState } from 'react';
import './App.css';
import Column from './Column';

function App() {
  const [arr, setArr] = useState([]);

  const handleColumnCount = (count) => {
    let result = window.confirm("You want to change coulmns?");
    if (result) {
      count 
        ? setArr(Array.from({length: count}, (_, i) => i + 1))
        : window.location.reload()
    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className='h-content'>
          <h2>Choose columns count</h2>
          <div className='columns'>
            <div className='column' onClick={() => handleColumnCount(2)}><span>2</span></div>
            <div className='column' onClick={() => handleColumnCount(3)}><span>3</span></div>
            <div className='column' onClick={() => handleColumnCount(4)}><span>4</span></div>
            <div className='column' onClick={() => handleColumnCount(0)}><span>&#8634;</span></div>
          </div>
        </div>
        <div className='h-body'>
          {arr.map((elem) => <Column key = {elem} /> )}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
