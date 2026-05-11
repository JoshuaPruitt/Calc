import { useState } from 'react';
import {add, mult, sub, div} from './components/functions.ts';
import { parseText } from './components/parser.ts';
import './App.css'

function App() {
  const [input, updateInp1] = useState<number>(0);
  const [input2, updateInp2] = useState<number>(0);
  const [resultant, updateResultant] = useState<number>(0) //The result of an operation
  const [operand, changeOperand] = useState<string>('')

  const [func, changeFunc] = useState<string>('');
  const [opperandArr, changeOperandArr] = useState<string[]>([]);
  const [numberArr, changeNumberArr] = useState<number[]>([]);
  const [variableArr, changeVariableArr] = useState<string[]>([]);

  const equate = () => {
    let res = 0;

    if (operand === '+') {
      res = additionHandler();
    } else if (operand === '*') {
      res = multiplicationHandler();
    } else if (operand === '-') {
      res = subtractionHandler();
    } else if (operand === '/') {
      res = divideHandler();
    }

    updateResultant(res);
  };

  const additionHandler = () => add(input, input2);
  const multiplicationHandler = () => mult(input, input2);
  const subtractionHandler = () => sub(input, input2)
  const divideHandler = () => div(input, input2);

  const parseNumber = (input: any) => {
    return Number(input);
  }

  const ret = () => {
    const {numArr, oppArr, varArr} = parseText(func);

    changeOperandArr(oppArr);
    changeNumberArr(numArr);
    changeVariableArr(varArr);
  }

  return (
    <div>
      <h1>HI RUBY</h1>
J
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => updateInp1(parseNumber(e.target.value))}
          placeholder="number 1"
        />
      </div>

      <div>
        <input
          type="text"
          value={input2}
          onChange={(e) => updateInp2(parseNumber(e.target.value))}
          placeholder="number 2"
        />
      </div>

      <div>
        <h3>{operand}</h3>
      </div>

      <button type="button" onClick={() => changeOperand('+')}>
        <h2>+</h2>
      </button>

      <button type="button" onClick={() => changeOperand('*')}>
        <h2>*</h2>
      </button>

      <button type="button" onClick={() => changeOperand('-')}>
        <h2>-</h2>
      </button>

      <button type="button" onClick={() => changeOperand('/')}>
        <h2>/</h2>
      </button>

      <button type="button" onClick={equate}>
        <h2>=</h2>
      </button>

      <div>
        <input 
          type='text'
          onChange={(e) => changeFunc(e.target.value)}
        />
      </div>

      <div>
        <button type='button' onClick={() => ret()}>=</button>
      </div>

      <h2>{func}</h2>

      <div>
        <h2>{opperandArr.toString()}</h2>
        <h2>{numberArr.toString()}</h2>
        <h2>{variableArr.toString()}</h2>
      </div>

      <div>
        <span>{resultant}</span>
      </div>
    </div>
  );
}

export default App
