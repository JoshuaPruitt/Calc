import { useState } from 'react';
import tokenize from './components/eval.ts';
import './App.css'

function App() {
  const [resultant, updateResultant] = useState<string>('') //The result of an operation

  const [func, changeFunc] = useState<string>('');

  const equate = () => {
    const tokens = tokenize([...func])
    console.log(tokens)
    updateResultant(JSON.stringify(tokens))
  };

  return (
    <div>
      <div>
        <input 
          type='text'
          onChange={(e) => changeFunc(e.target.value)}
        />
      </div>

      <button type="button" onClick={equate}>
        <h2>=</h2>
      </button>

      <div>
        <span>{resultant}</span>
      </div>
    </div>
  );
}

export default App
